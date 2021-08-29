import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UserContext from './contexts/UserContext';
import HomePageFunctional from './components/HomePageFunctional';

function AppFunctional() {
  const [appState, setAppState] = useState({
    user: {
      name: 'Fadhil Yusuf Rahadika',
    },
    withHomePage: false,
  });

  console.log('app functional render', appState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <UserContext.Provider
          value={{
            value: {
              ...appState.user,
            },
            setter: (newValue) => {
              setAppState((current) => {
                console.log('current state', current);
                console.log('new value', newValue);

                return {
                  ...current,
                  user: newValue,
                };
              });
            },
          }}
        >
          <>
            {appState.withHomePage ? <HomePageFunctional /> : null}
            <button
              onClick={() => {
                setAppState((current) => ({
                  ...current,
                  withHomePage: !current.withHomePage,
                }));
              }}
            >
              {appState.withHomePage ? 'Hilangkan' : 'Tampilkan'} HomePage
            </button>
          </>
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default AppFunctional;
