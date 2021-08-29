import { useReducer } from 'react';

const INITIAL_STATE = { value: 0 };

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'decrement':
      return {
        ...state,
        value: state.value - 1,
      };
    case 'reset':
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

function useCountWithReducer() {
  const [count, countDispatcher] = useReducer(countReducer, INITIAL_STATE);
  const increment = () => countDispatcher({ type: 'increment' });
  const decrement = () => countDispatcher({ type: 'decrement' });
  const reset = () => countDispatcher({ type: 'reset' });

  return {
    count: count.value,
    increment,
    decrement,
    reset,
  };
}

export default useCountWithReducer;
