import * as types from '../actions/actionTypes';
import initialState from './initialState';


const forecast = (state = initialState.forecast, action) => {
  switch (action.type) {
    case types.GET_FORECAST_SUCCESS:
      return action.coming
    default:
      return state
  }
}

export default forecast;
