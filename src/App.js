import { combineReducers } from 'redux';
import cart from './Cart/CartReducers';

import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export const reducers = combineReducers({
  cart
});

export const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers);

export const dispatch = store.dispatch;
