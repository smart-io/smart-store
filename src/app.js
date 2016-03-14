import { combineReducers } from 'redux';
import cart from './cart/cart-reducers';
import order from './order/order-reducers';
import orders from './orders/orders-reducers';
import Cart from './cart/cart';
import Order from './order/order';
import Orders from './orders/orders';

import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export const reducers = combineReducers({
  cart,
  order,
  orders
});

let state = {};
try {
  if (localStorage) state.cart = JSON.parse(localStorage['cart']);
  else state.cart = {...new Cart};
} catch (e) {
  state.cart = {...new Cart};
}
state.order = {...new Order};
state.orders = [...new Orders().items];

export const initialState = state;

export const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers, initialState);

export const dispatch = store.dispatch;
