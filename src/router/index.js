import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import BrazilPage from '~/pages/Brazil';
import DownloadPage from '~/pages/Download';
import HomePage from '~/pages/Home';
import NewsPage from '~/pages/News';
import NotFoundPage from '~/pages/NotFound';
import StatePage from '~/pages/State';
import InformationStatePage from '~/pages/State/Information';
import WorldPage from '~/pages/World';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />

      <Route path="/world" component={WorldPage} />
      <Route path="/brazil" component={BrazilPage} />
      <Route path="/state" component={StatePage} exact />
      <Route path="/state/:uf" component={InformationStatePage} />

      <Route path="/news" component={NewsPage} />
      <Route path="/download" component={DownloadPage} />

      <Route path="/404" component={NotFoundPage} />

      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
