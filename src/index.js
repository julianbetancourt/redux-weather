import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './sass/main.sass';
import configStore from './store/configStore';
import { Provider } from 'react-redux';
import { getInitialCity } from './actions/cityActions';

export const store = configStore();
store.dispatch(getInitialCity());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
