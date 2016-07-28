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
