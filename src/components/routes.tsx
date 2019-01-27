import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './app';
import Counter from './counter';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={Counter} />
    </Switch>
  </App>
);
