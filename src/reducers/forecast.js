import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { updateUnits } from './currentWeather';

const forecast = (state = initialState.forecast, action) => {
  switch (action.type) {
    case types.GET_FORECAST_SUCCESS:
      return action.coming
    case types.TOGGLE_UNIT:
      return state.map(forecast =>  {
        return Object.assign({}, forecast, {
          temp: updateUnits(action.payload.currentWeather.unit, forecast.temp)
        })
      })
    default:
      return state
  }
}

export default forecast;
