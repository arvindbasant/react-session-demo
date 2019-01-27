import { combineReducers } from 'redux';
import counter from './counter/counter-reducer';
import { connectRouter } from 'connected-react-router';

export const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    counter,
});