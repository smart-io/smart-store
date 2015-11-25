import { combineReducers } from 'redux';
import cart from './Cart/CartReducers';
import order from './Order/OrderReducers';
import Cart from './Cart/Cart';

import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export const reducers = combineReducers({
  cart,
  order
});

let state = {};
try {
  if (localStorage) state.cart = JSON.parse(localStorage['cart']);
  else state.cart = {...Cart};
} catch (e) {
  state.cart = {...Cart};
}

export const initialState = state;

export const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers, initialState);

export const dispatch = store.dispatch;
