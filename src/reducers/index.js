import { combineReducers } from 'redux';
import city from './city';
import currentWeather from './currentWeather';
import forecast from './forecast';
import textInput from './textInput';

const rootReducer = combineReducers({
  unit: "F",
  city,
  currentWeather,
  forecast,
  textInput
});

export default rootReducer;
