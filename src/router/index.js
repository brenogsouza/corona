import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import DownloadPage from '~/pages/Download';
import HomePage from '~/pages/Home';
import NewsPage from '~/pages/News';
import StatePage from '~/pages/State';
import InformationStatePage from '~/pages/State/Information';
import WorldPage from '~/pages/World';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />

      <Route path="/world" component={WorldPage} />
      <Route path="/state" component={StatePage} exact />
      <Route path="/state/:uf" component={InformationStatePage} />

      <Route path="/news" component={NewsPage} />
      <Route path="/download" component={DownloadPage} />

      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
