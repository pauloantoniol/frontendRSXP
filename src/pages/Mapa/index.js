import React, {Component} from 'react';

import mapboxgl from 'mapbox-gl';

import api from "../../services/api";

import { Wrapper, MapContainer } from './styles';

mapboxgl.accessToken =
  'pk.eyJ1IjoicGF1bG9hbnRvbmlvbCIsImEiOiJjazNnbjc4bXgwMzBrM29xbG5mZ282MHVuIn0.VRooPx9e-gEkUEQLokrudg';

export default class Mapa extends Component{
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 14,
      events: [],
      map: '',
    };

    this.getPosition = this.getPosition.bind(this);
  }

  getPosition(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    this.setState({lng:position.coords.longitude, lat:position.coords.latitude});

    console.log(`longitude: ${ lng } | latitude: ${ lat }`);
  }

  async componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);

      const response = await api.get(`/eventos`);

      this.setState({ events:response.data });

      var map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
      });

      this.setState({ map:map });

      var el = document.createElement('div');
      el.className = 'marker';

      new mapboxgl.Marker(el)
        .setLngLat([this.state.lng, this.state.lat])
        .addTo(this.state.map);

      function setMarker(evento){
        var el = document.createElement('div');
        el.className = 'markerEvent';

        let latLng = {lng: evento.location.split(',')[0], lat: evento.location.split(',')[1]};
        console.log(latLng);

        new mapboxgl.Marker(el)
          .setLngLat(latLng)
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3>${evento.nome}</h3><p>${evento.bio}</p>`))
          .addTo(map);
      }

      this.state.events.map((evento)=>{
        setMarker(evento);
      });

      console.log(this.state);
    } else {
      var map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
      });

      this.setState({ map:map });

      console.log('seu browser não suporta geolocalização!');
    }
  }

  render(){
    return (
    <>
      <Wrapper>
        <MapContainer ref={el => this.mapContainer = el}/>
      </Wrapper>
    </>
  );
  }
};