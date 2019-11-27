import styled from "styled-components";

import user_marker from "../../assets/img/mapbox-icon.png";
import event_marker from "../../assets/img/event.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #acacac;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;

  .marker{
    background-image: url(${user_marker});
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }

  .markerEvent{
    background-image: url(${event_marker});
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }

  .mapboxgl-popup {
    max-width: 200px;
    background: #fff;
  }

  .mapboxgl-popup-content {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }
`;
