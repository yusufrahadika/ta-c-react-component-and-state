import React from 'react';
import UserContext from '../contexts/UserContext';

function WelcomeFunctional() {
  return (
    <UserContext.Consumer>
      {({ value, setter }) => (
        <>
          <h1>Halo, {value.name}!</h1>
          <button
            onClick={() => {
              setter({
                ...value,
                name: value.name + '!',
              });
            }}
          >
            Tambah !
          </button>
        </>
      )}
    </UserContext.Consumer>
  );
}

export default WelcomeFunctional;
