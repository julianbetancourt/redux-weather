import * as types from '../actions/actionTypes';
import initialState from './initialState';


export const updateUnits = (unit, temp) => {
  if (unit === "F") {
    const number = (temp - 32) * (5/9);
    return Math.round(number * 10) / 10;
  } else {
    const number = (temp * (9/5)) + 32;
    return Math.round(number * 10) / 10;
  }
}

const currentWeather = (state = initialState.currentWeather, action) => {
  switch (action.type) {
    case types.GET_INITIAL_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        temp: action.temp,
        icon: action.icon,
        description: action.description
      });
    case types.TOGGLE_UNIT:
      if (state.unit === "F") {
        return Object.assign({}, state, {
          unit: "C",
          temp: updateUnits("F", state.temp)
        })
      } else {
        return Object.assign({}, state, {
          unit: "F",
          temp: updateUnits("C", state.temp)
        })
      }
    default:
      return state
  }
}

export default currentWeather;
