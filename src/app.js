import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import {defaultCart} from './cart/cart';
import {defaultOrder} from './order/order';

let initialSate = {};
try {
  if (localStorage) initialSate.cart = JSON.parse(localStorage['cart']);
  else initialSate.cart = { ...defaultCart };
} catch (e) {
  initialSate.cart = { ...defaultCart };
}
initialSate.order = { ...defaultOrder };
initialSate.taxes = [];

let store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers, initialSate);
let dispatch = store.dispatch;
let getState = store.getState;
let subscribe = store.subscribe;

export default store;
export {dispatch, getState, subscribe, initialSate};
export function setStore(newStore) {
  store = newStore;
  dispatch = newStore.dispatch;
  getState = newStore.getState;
  subscribe = newStore.subscribe;
}
