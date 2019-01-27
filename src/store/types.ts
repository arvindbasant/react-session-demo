import { CounterState, DEFAULT_COUNTER_STATE } from './counter/counter-type';

export interface ApplicationState {
    counter: CounterState;
}

export const DEFAULT_APPLICATION_STATE: ApplicationState = {
    counter: DEFAULT_COUNTER_STATE,
};
