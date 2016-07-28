import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastItem from '../components/ForecastItem';
import { setIcon } from './Hero';

class Forecast extends Component {
  render() {
    const { forecast } = this.props;
    return (
      <ul className="coming-weather">
        {
          forecast.map((day, index) => {
            const date = day.day;
            const icon = setIcon(day.icon);
            const temp = day.temp;
            return <ForecastItem key={index} day={date} icon={icon} temp={temp} />
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    forecast: state.forecast
  }
}



export default connect(mapStateToProps, null)(Forecast);
