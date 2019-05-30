// generic overloaded type and function to avoid creating action creator for each actions

export interface Action<T extends string> {
    type: T;
  }
  
export interface ActionWithPayload<T extends string, P> extends Action<T> {
    payload: P;
  }
  
export function actionCreator<T extends string>(type: T): Action<T>;
export function actionCreator<T extends string, P>(
    type: T,
    payload: P
  ): ActionWithPayload<T, P>;
export function actionCreator<T extends string, P>(type: T, payload?: P) {
    return payload === undefined ? { type } : { type, payload };
  }
  