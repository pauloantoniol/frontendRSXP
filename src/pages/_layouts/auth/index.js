import React from "react";
import { Link } from "react-router-dom";

import {
  Wrapper,
  Content,
  LoginForm,
  Form,
  FormInput,
  SubmitButton,
  FooterMenu
} from "./styles";

export default function DefaultLayout() {
  return (
    <Wrapper>
      <Content>
        <div className="imageContainer">
          <h1>Bem Vindo a seu Futuro!</h1>

          <p>
            Encontre eventos incríveis nas melhores empresas de tecnologia.
            Conheça mais da área que mais cresce no mundo, bons salários, ótimos
            benefícios e tudo que você precisa é abrir sua mente, explore e
            principalmente, divirta-se.
          </p>

          <button>CADASTRE-SE</button>
        </div>

        <LoginForm>
          <Form onSubmit={() => {}}>
            <h1>Login</h1>
            <FormInput>
              <input type="email" placeholder="Email" onChange={e => {}} />
            </FormInput>
            <FormInput>
              <input type="password" placeholder="Senha" onChange={e => {}} />

              <Link to="/">Esqueceu sua senha?</Link>
              <SubmitButton>
                <button type="submit">Entrar</button>
              </SubmitButton>
            </FormInput>
          </Form>
        </LoginForm>
      </Content>
    </Wrapper>
  );
}
