import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import cart from './cart/cart';
import order from './order/order';
import Orders from './orders/orders';

let initialSate = {};
try {
  if (localStorage) initialSate.cart = JSON.parse(localStorage['cart']);
  else initialSate.cart = { ...cart };
} catch (e) {
  initialSate.cart = { ...cart };
}
initialSate.order = { ...order };
initialSate.orders = [...new Orders().items];

let store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers, initialSate);
let dispatch = store.dispatch;
let getState = store.getState;
let subscribe = store.subscribe;

export default store;
export { dispatch, getState, subscribe, initialSate };
export function setStore(newStore) {
  store = newStore;
  dispatch = newStore.dispatch;
  getState = newStore.getState;
  subscribe = newStore.subscribe;
}
