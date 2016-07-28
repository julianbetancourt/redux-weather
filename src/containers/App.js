import React, { Component } from 'react';
import Hero from './Hero';
import Forecast from './Forecast';

class App extends Component {
  render() {
    return (
      <div className="card">
        <Hero />
        <Forecast />
      </div>
    );
  }
}

export default App;
