import * as types from './actionTypes';
import axios from 'axios';
import moment from 'moment';

export const getInitialWeatherSuccess = (temp, icon, description) => {
  return {
    type: types.GET_INITIAL_WEATHER_SUCCESS,
    temp,
    icon,
    description
  }
}

export const getInitialWeather = () => {
  return (dispatch, getState) => {
    const key ='5131d39e11970addaf8136e9673ebea0';
    const lat = getState().city.cityLat;
    const long = getState().city.cityLong;
    let unit = getState().currentWeather.unit;
    unit = unit === 'F' ? 'imperial' : 'metric';
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=${unit}`;
    axios.get(url).then(data => dispatch(getInitialWeatherSuccess(
      data.data.main.temp,
      data.data.weather[0].icon,
      data.data.weather[0].description
    )));
  }
}

export const getForecastSuccess = (coming) => {
  return {
    type: types.GET_FORECAST_SUCCESS,
    coming
  }
}

export const getForecast = () => {
  return (dispatch, getState) => {
    const key = '5131d39e11970addaf8136e9673ebea0';
    const city = getState().city.cityName;
    let unit = getState().currentWeather.unit;
    unit = unit === 'F' ? 'imperial' : 'metric';
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=${unit}`;
    axios.get(url).then(data => {
      const newJSON = data.data.list.filter(item => item.dt_txt.includes("12:00:00"));
      const comingDays = newJSON.map((day, i) => {
        return {
          temp: newJSON[i].main.temp,
          icon: newJSON[0].weather[0].icon,
          day: moment().add(i + 1, 'days').format('ddd')
        }
      })
      dispatch(getForecastSuccess(comingDays))
    });
  }
}

export const toggleUnitSuccess = (state) => {
  return {
    type: types.TOGGLE_UNIT,
    payload: state
  }
}

export const toggleUnit = () => {
  return (dispatch, getState) => {
    dispatch(toggleUnitSuccess(getState()))
  }
}
