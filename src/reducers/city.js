import initialState from './initialState';
import * as types from '../actions/actionTypes';

const city = (state = initialState.city, action) => {
  switch (action.type) {
    case types.GET_INITIAL_CITY_SUCCESS:
      return Object.assign({}, state, {
        cityName: action.city,
        cityLat: action.lat,
        cityLong: action.long
      });
    default:
      return state;
  }
}

export default city;
