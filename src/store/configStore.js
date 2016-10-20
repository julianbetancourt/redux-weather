import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';


const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const configStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}

export default configStore;
