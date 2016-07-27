import { combineReducers } from 'redux';
import city from './city';
import currentWeather from './currentWeather';

const rootReducer = combineReducers({
  city,
  currentWeather
});

export default rootReducer;
