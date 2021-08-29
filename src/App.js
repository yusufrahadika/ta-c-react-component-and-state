import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import UserContext from './contexts/UserContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Fadhil Yusuf Rahadika',
      },
      withHomePage: false,
    };
  }

  render() {
    console.log('app render', this.state);

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
                ...this.state.user,
              },
              setter: (newValue) => {
                this.setState((current) => {
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
              {this.state.withHomePage ? <HomePage /> : null}
              <button
                onClick={() => {
                  this.setState((current) => ({
                    ...current,
                    withHomePage: !current.withHomePage,
                  }));
                }}
              >
                {this.state.withHomePage ? 'Hilangkan' : 'Tampilkan'} HomePage
              </button>
            </>
          </UserContext.Provider>
        </header>
      </div>
    );
  }
}

export default App;
