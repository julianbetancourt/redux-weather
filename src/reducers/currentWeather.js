import * as types from '../actions/actionTypes';
import initialState from './initialState';

const currentWeather = (state = initialState.currentWeather, action) => {
  switch (action.type) {
    case types.GET_INITIAL_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        temp: action.temp,
        icon: action.icon,
        description: action.description,
        unit: "F"
      });
    default:
      return state
  }
}

export default currentWeather;
