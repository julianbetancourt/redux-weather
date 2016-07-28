import * as types from '../actions/actionTypes';
import initialState from './initialState';

const textInput = (state = initialState.textInput, action) => {
  switch (action.type) {
    case types.GET_CITY_NAME:
      return action.city;
    case types.CLEAN_INPUT:
      return '';
    default:
      return state;
  }
}

export default textInput;
