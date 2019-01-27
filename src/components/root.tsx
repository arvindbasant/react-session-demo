import * as React from 'react';
import { History } from 'history';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { ApplicationState } from '../store/types';
import Routes from './routes';

type RootType = {
  store: Store<ApplicationState>;
  history: History;
};

export default function Root({ store, history }: RootType) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}
