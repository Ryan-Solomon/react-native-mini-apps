type TCountAction =
  | {
      type: 'INCREMENT';
      payload: number;
    }
  | {
      type: 'DECREMENT';
      payload: number;
    }
  | {
      type: 'CLEAR';
    };

export const counterReducer = (state: number, action: TCountAction): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    case 'CLEAR':
      return 0;
    default:
      throw new Error('Action not supported');
  }
};
