import React, { Component } from 'react';
import _ from 'lodash';

class CurrentWeather extends Component {
  render() {
    const { temp, icon, description, unit, toggleUnit } = this.props;
    return (
      <div className="current-weather">
        <span className="current-weather__temp" onClick={() => toggleUnit()}>
          {Math.round(temp*10)/10}º{unit}
        </span>
        <i className={`wi current-weather__icon ${icon}`}></i>
        <span className="current-weather__description">{_.startCase(description)}</span>
      </div>
    );
  }
}

export default CurrentWeather;
