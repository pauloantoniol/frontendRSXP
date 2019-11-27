import styled from 'styled-components';
import { darken } from 'polished';
import { Button } from '@material-ui/core';

import image_login from '../../../assets/img/1.jpg';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  div.imageContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    width: 40%;
    height: 100%;

    background: url(${image_login});

    p {
      width: 480px;
      text-align: center;
      padding: 20px;
    }

    button {
      border: 3px solid;
      padding: 10px;
      width: 420px;
      border-radius: 5px;
      cursor: pointer;

      /* css reset */
      margin: 0;
      overflow: visible;
      background: transparent;
      color: inherit;
      font: inherit;
      line-height: normal;
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
      -webkit-appearance: none;
    }
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
  }
`;

export const ContentForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  /*CUSTOMIZAÇÃO DE INPUT*/
  .MuiTextField-root {
    margin-top: 25px;
  }
  .MuiInputBase-input {
    padding: 6px 0 15px;
  }
  .MuiInputLabel-shrink {
    font-size: 20px;
  }
  .MuiFormLabel-root.Mui-focused {
    color: #11998e;
  }
  .MuiInput-underline:after {
    border-color: #11998e;
  }

  /*CURTOMIZAÇÃO DO LINK*/
  a {
    margin-top: 30px;
    text-align: center;
    text-decoration: none;
    color: #3e3e3e;
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px !important;
  color: #fff !important;
  background: #11998e !important;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background: ${darken(0.02, '#11998e')} !important;
  }

  label {
    font-size: 20px;
    font-weight: 800;
  }
`;
