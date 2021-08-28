import React from 'react';

const INITIAL_STATE = {
  value: {
    name: 'Manusia',
  },
  setter: () => {},
};

const UserContext = React.createContext(INITIAL_STATE);

export default UserContext;
