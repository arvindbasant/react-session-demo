import { actionCreator } from '../utils/action-creator';
import { ActionUnion } from '../utils/action-union';
import { put, takeEvery, delay } from 'redux-saga/effects';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const COUNTER_ACTIONS = {
    incrementCounter: () => actionCreator(INCREMENT_COUNTER),
    decrementCounter: (counter: number) => actionCreator(DECREMENT_COUNTER, { counter }),
    incrementIfOdd: (counter: number) => actionCreator(INCREMENT_IF_ODD, { counter })
};

export type CounterActions = ActionUnion<typeof COUNTER_ACTIONS>;

const incrementIfOdd = function* (action: ReturnType<typeof COUNTER_ACTIONS['incrementIfOdd']>): IterableIterator<any> {
    const { payload: { counter } } = action;
    try {
        if (counter % 2 === 0) {
            return;
        }
        yield delay(1000);
        yield put(COUNTER_ACTIONS.incrementCounter());

    } catch (err) {
        console.log('Error:', err);
    }

};
export default function* counterSaga() {
    yield takeEvery(INCREMENT_IF_ODD, incrementIfOdd);
}