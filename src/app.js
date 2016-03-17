import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import cart from './cart/cart';
import order from './order/order';
import Orders from './orders/orders';

let state = {};
try {
  if (localStorage) state.cart = JSON.parse(localStorage['cart']);
  else state.cart = { ...cart };
} catch (e) {
  state.cart = { ...cart };
}
state.order = { ...order };
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
