import React, { Component } from 'react';
import { connect } from 'react-redux';
import City from '../components/City';
import CurrentWeather from '../components/CurrentWeather';
import { toggleUnit } from '../actions/weatherActions';
import { getNewCity, getCityName, cleanInput } from '../actions/cityActions';

class Hero extends Component {
  render() {
    const { city, temp, icon, description, unit, toggleUnit, getNewCity, getCityName, cleanInput } = this.props;
    return (
      <div className={`hero ${icon}`}>
        <City city={city} getNewCity={getNewCity} getCityName={getCityName} cleanInput={cleanInput}/>
        <CurrentWeather
          temp={temp}
          icon={icon}
          description={description}
          unit={unit}
          toggleUnit={toggleUnit}/>
      </div>
    );
  }
}

export const setIcon = (icon) => {
  const icons = {
    '01d': 'wi-day-sunny',
    '01n': 'wi-night-clear',
    '02d': 'wi-day-cloudy',
    '02n': 'wi-night-cloudy',
    '03d': 'wi-day-cloudy-gusts',
    '03n': 'wi-night-cloudy-gusts',
    '04d': 'wi-day-cloudy-gusts',
    '04n': 'wi-night-cloudy-gusts',
    '09d': 'wi-day-sprinkle',
    '09n': 'wi-night-sprinkle',
    '10d': 'wi-day-rain',
    '10n': 'wi-night-rain',
    '11d': 'wi-day-thunderstorm',
    '11n': 'wi-night-thunderstorm',
    '13d': 'wi-day-snow',
    '13n': 'wi-night-snow',
    '50d': 'wi-day-fog',
    '50n': 'wi-night-fog'
  }
  return icons[icon];
}

const mapStateToProps = (state) => {
  return {
    city: state.city.cityName,
    icon: setIcon(state.currentWeather.icon),
    temp: state.currentWeather.temp,
    description: state.currentWeather.description,
    unit: state.currentWeather.unit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleUnit: () => dispatch(toggleUnit()),
    getCityName: (city) => dispatch(getCityName(city)),
    getNewCity: () => dispatch(getNewCity()),
    cleanInput: () => dispatch(cleanInput())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Hero);
