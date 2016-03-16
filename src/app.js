import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import Cart from './cart/cart';
import Order from './order/order';
import Orders from './orders/orders';

let state = {};
try {
  if (localStorage) state.cart = JSON.parse(localStorage['cart']);
  else state.cart = {...new Cart};
} catch (e) {
  state.cart = {...new Cart};
}
state.order = {...new Order};
state.orders = [...new Orders().items];

let store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers, state);
let dispatch = store.dispatch;
let getState = store.getState;
let subscribe = store.subscribe;

export default store;
export { dispatch, getState, subscribe };
export function setStore(newStore) {
  store = newStore;
  dispatch = newStore.dispatch;
  getState = newStore.getState;
  subscribe = newStore.subscribe;
}
