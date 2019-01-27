import * as React from 'react';
import { CounterState } from '../../store/counter/counter-type';
import { DispatchProps } from '../../store/utils/dispatch-props';
import { COUNTER_ACTIONS, CounterActions } from '../../store/counter/counter-actions';
import { ApplicationState } from '../../store/types';
import { connect } from 'react-redux';
import * as styles from './counter.scss';

type CounterProps = {
  title?: string;
};
type Props = CounterProps & CounterState & DispatchProps<CounterActions>;

export class Counter extends React.Component<Props> {
  constructor(porps: Props) {
    super(porps);
  }
  public render() {
    const { dispatch, counter } = this.props;
    return (
      <div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={() => dispatch(COUNTER_ACTIONS.incrementCounter())} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={() => dispatch(COUNTER_ACTIONS.decrementCounter(0))} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={() => dispatch(COUNTER_ACTIONS.incrementIfOdd(counter))} data-tclass="btn">odd</button>
        </div>
      </div>
    );
  }
}
export default connect(
  (state: ApplicationState): CounterState => ({
    counter: state.counter.counter
  })
)(Counter);
