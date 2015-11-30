import { combineReducers } from 'redux';
import cart from './Cart/CartReducers';
import order from './Order/OrderReducers';
import orders from './Orders/OrdersReducers';
import Cart from './Cart/Cart';
import Order from './Order/Order';
import Orders from './Orders/Orders';

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
