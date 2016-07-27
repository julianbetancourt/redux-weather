import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './sass/main.sass';
import configStore from './store/configStore';
import { Provider } from 'react-redux';
import { getInitialCity } from './actions/cityActions';
import { getInitialWeather } from './actions/weatherActions';

export const store = configStore();
store.dispatch(getInitialCity());
store.dispatch(getInitialWeather())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
