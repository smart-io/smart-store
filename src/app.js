import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import {defaultCart} from './cart/cart';
import {defaultOrder} from './order/order';

let initialSate = {};
try {
  if (localStorage) initialSate.cart = JSON.parse(localStorage['cart']);
} catch (err) {}
if (!initialSate.cart) initialSate.cart = { ...defaultCart };
initialSate.order = { ...defaultOrder };
initialSate.taxes = [];
if (initialSate.cart && initialSate.cart.taxes) {
  for (let i = 0, len = initialSate.cart.taxes.length; i < len; ++i) {
    let tax = { ...initialSate.cart.taxes[i] };
    tax.amount = 0;
    initialSate.order.taxes.push({ ...tax });
    delete tax.amount;
    initialSate.taxes.push({ ...tax });
  }
}

let store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers, initialSate);
let dispatch = store.dispatch;
let getState = store.getState;
let subscribe = store.subscribe;

export default store;
export {dispatch, getState, subscribe, initialSate};

export function promiseDispatch(action) {
  return new Promise(resolve => {
    let unsubscribe = subscribe(() => {
      unsubscribe();
      resolve();
    });
    dispatch(action);
  });
}

export function conclude(obj) {
  let prop;
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) break;
  }

  if (prop) {
    if (obj[prop] === undefined) return getState()[prop];
    else return obj[prop];
  }
  return null;
}

export function setStore(newStore) {
  store = newStore;
  dispatch = newStore.dispatch;
  getState = newStore.getState;
  subscribe = newStore.subscribe;
}
