import React, { Component } from 'react';
import Hero from './Hero';
import Forecast from './Forecast';
import { setIcon } from './Hero';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { icon } = this.props;
    return (
      <div className={`container ${icon}`}>
        <div className="card">
          <Hero />
          <Forecast />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    icon: setIcon(state.currentWeather.icon)
  }
}

export default connect(mapStateToProps, null)(App);
