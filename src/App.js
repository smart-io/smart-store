import { combineReducers } from 'redux';
import { finalCreateStore } from './ReduxStore/Store';
import { devFinalCreateStore } from './ReduxStore/DevStore';
import cart from './Cart/CartReducers';

let createStore = process.env.NODE_ENV === 'development' ? devFinalCreateStore : finalCreateStore;

export const store = createStore(combineReducers({
  cart
}));

export const dispatch = store.dispatch;
