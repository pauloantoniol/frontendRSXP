import styled from "styled-components";

import image_login from "../../assets/img/mapbox-icon.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #acacac;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;

  .marker{
    background-image: url(${image_login});
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }

  .mapboxgl-popup {
    max-width: 200px;
  }

  .mapboxgl-popup-content {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }
`;
