import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import Mapa from '../pages/Mapa';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={() => {}} exact />
      <Route path="/mapa" component={Mapa} isPrivate />
      <Redirect to="/" />
    </Switch>
  );
}
