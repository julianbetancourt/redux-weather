import * as types from './actionTypes';
import axios from 'axios';
import { getInitialWeather } from './weatherActions';
import { getForecast } from './weatherActions';

export const getInitialCitySuccess = (city, lat, long) => {
  return {
    type: types.GET_INITIAL_CITY_SUCCESS,
    city,
    lat,
    long
  }
}

export const getInitialCity = (dispatch) => {
  return dispatch => {
    axios.get('http://ip-api.com/json')
      .then(data => {
        const city = data.data.city;
        const country = data.data.countryCode;
        dispatch(getInitialCitySuccess(`${city},${country}`, data.data.lat, data.data.lon))
      })
      .then(data => dispatch(getInitialWeather()))
      .then(data => dispatch(getForecast()))
  }
}

export const getCityName = (city) => {
  return {
    type: types.GET_CITY_NAME,
    city
  }
}

export const cleanInput = () => {
  return {
    type: types.CLEAN_INPUT
  }
}

export const getNewCity = (dispatch) => {
  return (dispatch, getState) => {
    const key = '5131d39e11970addaf8136e9673ebea0';
    const city = getState().textInput;
    let unit = getState().currentWeather.unit;
    unit = unit === 'F' ? 'imperial' : 'metric';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}`;
    axios.get(url)
      .then(data => {
        const city = data.data.name;
        const country = data.data.sys.country;
        dispatch(getInitialCitySuccess(`${city},${country}`, data.data.coord.lat, data.data.coord.lon))
      })
      .then(data => dispatch(getInitialWeather()))
      .then(data => dispatch(getForecast()))
  }
}
