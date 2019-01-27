import { routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import {
  applyMiddleware,
  createStore,
  Middleware,
  Store,
  StoreEnhancer
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createRootReducer } from './root-reducer';
import { ApplicationState, DEFAULT_APPLICATION_STATE } from './types';
import { composeWithDevTools } from 'redux-devtools-extension';

export const sagaMiddleware = createSagaMiddleware();
export const history = createHistory();
const middleware: Middleware[] = [routerMiddleware(history), sagaMiddleware];

export function configureStore(defaultState: ApplicationState = DEFAULT_APPLICATION_STATE): Store<ApplicationState> {
  const store: Store<ApplicationState> = createStore(
    createRootReducer(history),
    defaultState,
    composeWithDevTools(applyMiddleware(...middleware) as StoreEnhancer<any>)
  );
  return store;
}
