import { combineReducers } from 'redux';
import city from './city';
import currentWeather from './currentWeather';
import comingWeather from './comingWeather';

const rootReducer = combineReducers({
  unit: "F",
  city,
  currentWeather,
  comingWeather
});

export default rootReducer;
