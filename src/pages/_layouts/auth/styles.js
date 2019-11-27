import styled from "styled-components";

import image_login from "../../../assets/img/1.jpg";

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
`;

export const LoginForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  height: 100%;
`;

export const Form = styled.form`
  width: 600px;
  padding: 0px 100px;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;

  margin: 13px 0px;

  input {
    border-bottom: 1px solid #111;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }

  a {
    text-align: center;
    padding: 10px;
  }

  button {
    color: #fff;
    padding: 10px;
    width: 420px;
    border-radius: 5px;
    cursor: pointer;
    background: #14988b;

    /* css reset */
    border: none;
    margin: 0;
    overflow: visible;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }
`;

export const SubmitButton = styled.div`
  margin: 20px 0;
  text-align: center;
`;
