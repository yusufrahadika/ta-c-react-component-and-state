import React from 'react';
import Welcome from './Welcome';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  componentDidMount() {
    console.log('HomePage berhasil dirender');
  }

  componentWillUnmount() {
    console.log('HomePage berhasil dihilangkan');
  }

  render() {
    console.log('HomePage dirender', this.state);

    return (
      <div>
        <Welcome />
        <h3>Nilai saat ini: {this.state.value}</h3>
        <button
          onClick={() => {
            this.setState((current) => ({
              value: current.value + 1,
            }));
          }}
        >
          Tambah
        </button>
      </div>
    );
  }
}

export default HomePage;
