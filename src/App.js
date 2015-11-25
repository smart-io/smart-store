import { combineReducers } from 'redux';
import cart from './Cart/CartReducers';
import cartDefault from './Cart/Cart';

import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export const reducers = combineReducers({
  cart
});

let state = {};
try {
  state.cart = JSON.parse(localStorage['cart']);
} catch (e) {
  state.cart = cartDefault;
}

export const initialState = state;

export const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers, initialState);

export const dispatch = store.dispatch;
