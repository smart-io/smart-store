import * as App from './App';
import Cart from './Cart/Cart';
import Order from './Order/Order';

class Store {
  static reducers = App.reducers;
  static store = App.store;
  static dispatch = App.dispatch;
  static initialState = App.initialState;
  static _url;

  static set url(value) {
    Store._url = value;
  }

  static get url() {
    return Store._url;
  }

  /**
   * @return {Cart}
   */
  static get cart() {
    return Cart.initialize();
  }

  /**
   * @return {Order}
   */
  static get order() {
    return Order.initialize();
  }
}

export default Store;
export const reducers = Store.reducers;
export const store = Store.store;
export const dispatch = Store.dispatch;
export const initialState = Store.initialState;
