import React, { Component } from 'react';
import { CounterState } from '../../store/counter/counter-type';
import { DispatchProps } from '../../store/utils/dispatch-props';
import { COUNTER_ACTIONS, CounterActions } from '../../store/counter/counter-actions';
import { ApplicationState } from '../../store/types';
import { connect } from 'react-redux';
import * as styles from './counter.scss';

// ownProps
interface CounterProps {
  title?: string;
}

// ownState
interface State {
  message: string;
}

// here DispatchProps is used to restrict the action i.e only related action can be dispatched from component
type Props = CounterProps & CounterState & DispatchProps<CounterActions>; // intersection of ownProps, connected props(redux props): CounterState and DispatchProps

export class Counter extends Component<Props, State> {
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
        <br />
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={() => dispatch(COUNTER_ACTIONS.incrementCounter())} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={() => dispatch(COUNTER_ACTIONS.decrementCounter(0))} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={() => dispatch(COUNTER_ACTIONS.incrementIfOdd(counter))} data-tclass="btn">odd</button>
          <div>
            <h2>Tasks: Hint: use generic to design state</h2>
            <u>
              <li>Increment the counter randomly</li>
              <li>also print the factorial value</li>
              <li>Implement undo redo for counter number Hint: Wrap state with undo-redo impl class or func</li>
              <li>Implement memorization for factorial to improve performance: Wrap factorial state with memorization impl</li>
            </u>
          </div>
        </div>
      </div>
    );
  }
}

// Note: not separating component with container component, it may leads to file deletion in future js release
// becoz connect can be use as class decorator
// since no mapDispatchToProps, thus mapStateToProps is used as inline func argument with connect
export default connect(
  (state: ApplicationState): CounterState => ({
    counter: state.counter.counter
  })
)(Counter);
