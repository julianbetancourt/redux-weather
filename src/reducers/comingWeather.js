import * as types from '../actions/actionTypes';
import initialState from './initialState';


const comingWeather = (state = initialState.comingWeather, action) => {
  switch (action.type) {
    case types.GET_COMING_WEATHER_SUCCESS:
      return action.coming
    default:
      return state
  }
}

export default comingWeather;
