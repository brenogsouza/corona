import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import BrazilPage from '~/pages/Brazil';
import HomePage from '~/pages/Home';
import NotFoundPage from '~/pages/NotFound';
import StatesPage from '~/pages/States';
import StateInformationPage from '~/pages/States/Information';
import WorldPage from '~/pages/World';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />

      <Route path="/world" component={WorldPage} />
      <Route path="/brazil" component={BrazilPage} />
      <Route path="/states" component={StatesPage} exact />
      <Route path="/states/:uf" component={StateInformationPage} />

      <Route path="/404" component={NotFoundPage} />

      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
