import React, {Component} from 'react';

import mapboxgl from 'mapbox-gl';

import { Wrapper, MapContainer } from './styles';

mapboxgl.accessToken =
  'pk.eyJ1IjoicGF1bG9hbnRvbmlvbCIsImEiOiJjazNnbjc4bXgwMzBrM29xbG5mZ282MHVuIn0.VRooPx9e-gEkUEQLokrudg';

export default class Mapa extends Component{
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 14
    };

    this.getPosition = this.getPosition.bind(this);
  }

  getPosition(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    this.setState({lng:position.coords.longitude, lat:position.coords.latitude});

    console.log(`longitude: ${ lng } | latitude: ${ lat }`);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    } else {
      console.log('seu browser não suporta geolocalização!');
    }
  }

  componentDidUpdate(){
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
    .setLngLat([this.state.lng, this.state.lat])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>você está aqui</h3><p>descrição</p>'))
    .addTo(map);
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