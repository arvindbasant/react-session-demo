// util to create union of all actions

type FunctionType = (...args: any[]) => any;
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };
export type ActionUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;