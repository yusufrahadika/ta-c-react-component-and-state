import React, { useEffect } from 'react';
import useCount from '../hooks/useCount';
import useCountWithReducer from '../hooks/useCountWithReducer';
import WelcomeFunctional from './WelcomeFunctional';

function HomePageFunctional() {
  const { count, decrement, increment, reset } = useCountWithReducer();

  useEffect(() => {
    console.log('HomePage berhasil dirender');
    return () => {
      console.log('HomePage berhasil dihilangkan');
    };
  }, []);

  console.log('HomePage functional dirender', count);

  return (
    <div>
      <WelcomeFunctional />
      <h3>Nilai saat ini: {count}</h3>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default HomePageFunctional;
