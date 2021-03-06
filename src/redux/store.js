import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middleware = [logger];

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

  
