import * as types from './actionTypes';
import axios from 'axios';

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
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;
    axios.get(url).then(data => dispatch(getInitialWeatherSuccess(
      data.data.main.temp,
      data.data.weather[0].icon,
      data.data.weather[0].description
    )));
  }
}

export const getComingWeatherSuccess = () => {
  return {
    type: types.GET_COMING_WEATHER_SUCCESS
  }
}

export const getComingWeather = () => {
  return (dispatch, getState) => {
    const key = '5131d39e11970addaf8136e9673ebea0';
    const city = getState().city.cityName;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;
    axios.get(url).then(data => console.log(data.data))
  }
}
