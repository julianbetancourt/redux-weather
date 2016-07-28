import { combineReducers } from 'redux';
import city from './city';
import currentWeather from './currentWeather';
import forecast from './forecast';

const rootReducer = combineReducers({
  unit: "F",
  city,
  currentWeather,
  forecast
});

export default rootReducer;
