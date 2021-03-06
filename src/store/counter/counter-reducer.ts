import { CounterActions } from './counter-actions';
import { Reducer } from 'redux';
import { CounterState, DEFAULT_COUNTER_STATE } from './counter-type';

// here reducer is restricted perticular component
const counterReducer: Reducer<CounterState, CounterActions> = (
    state: CounterState = DEFAULT_COUNTER_STATE,
    action: CounterActions
): CounterState => {
    switch (action.type) {
        case 'INCREMENT_COUNTER': // even string is type checked const not required
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT_COUNTER':
            return { ...state, counter: state.counter - 1 };
        case 'INCREMENT_IF_ODD':
            return state;
        default:
            return state;
    }
};

export default counterReducer;