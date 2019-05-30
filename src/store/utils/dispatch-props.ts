import { Action } from 'redux';
import { Dispatch } from 'redux';

// generic dispatch props used to avoid mapDispatchToProps accoss components
export interface DispatchProps<A extends Action> {
  dispatch: Dispatch<A>;
}
