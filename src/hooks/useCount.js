import { useState } from 'react';

const INITIAL_STATE = { value: 0 };

function useCount() {
  const [count, setCount] = useState(INITIAL_STATE);
  const increment = () => {
    setCount((current) => ({
      ...current,
      value: current.value + 1,
    }));
  };

  const decrement = () => {
    setCount((current) => ({
      current,
      value: current.value - 1,
    }));
  }

  const reset = () => {
    setCount(INITIAL_STATE);
  }

  return {
    count: count.value,
    increment,
    decrement,
    reset,
  }
}

export default useCount;
