import React from 'react';
import { Link, Redirect  } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import history from '../../../services/history'

import { TextField } from '@material-ui/core';
import { Wrapper, Content, ContentForm, SubmitButton } from './styles';

export default function DefaultLayout() {
  function handleSubmit(data) {
    history.push('/mapa?signed=true');
  }

  return (
    <Wrapper>
      <Content>
        <div className="imageContainer">
          <h1>Bem Vindo a seu Futuro!</h1>

          <p>
            Aqui você encontra incríveis eventos nas melhores empresas, conhece
            sua cultura, e forma de trabalho. E tudo que você precisa é abrir
            sua mente, explore, deixe as tradições de lado e principalmente,
            divirta-se.
          </p>

          <button>CADASTRE-SE</button>
        </div>

        <Form onSubmit={handleSubmit}>
          <ContentForm>
            <h1>Login</h1>

            <TextField
              type="email"
              label="Email"
              inputProps={{ name: 'email' }}
            />
            <TextField
              type="password"
              label="Senha"
              inputProps={{ name: 'password' }}
            />
            <Link to="/">Esqueceu sua senha?</Link>
            <SubmitButton type="submit" onClick={() => {}}>
              <label> ENTRAR </label>
            </SubmitButton>
          </ContentForm>
        </Form>
      </Content>
    </Wrapper>
  );
}
