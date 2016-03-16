import reduxStore from './app';

export function store() {
  return next => (reducer, initialState, enhancer) => {
    function nextReducer() {
      return function (state = {}, action) {
        state = reducer(state, action);
        return { ...state, ...reduxStore.getState() };
      };
    }
    const store = next(nextReducer(), initialState, enhancer);

    return {
      ...store,
      dispatch(...args) {
        store.dispatch(...args);
        reduxStore.dispatch(...args);
        return args[0];
      },
      getState() {
        return { ...store.getState(), ...reduxStore.getState() };
      }
    };
  };
}

let _config = { url: null };
export function config(config, value) {
  if (value !== undefined) {
    let newConfig = {};
    newConfig[config] = value;
    config = newConfig;
  }
  _config = { ..._config, ...config };
}

export function getConfig() {
  return _config;
}

/*export { default as Order } from './order/order';


class Store {
  static reducers = App.reducers;
  static store = App.store;
  static dispatch = App.dispatch;
  static initialState = App.initialState;
  static _url;
  static _session;

  static set session(value) {
    Store._session = value;
  }

  static get session() {
    return Store._session;
  }

  static set url(value) {
    Store._url = value;
  }

  static get url() {
    return Store._url;
  }

  static get cart() {
    return Cart.initialize();
  }

  static get order() {
    return new Order(store.getState().order);
  }

  static get orders() {
    return Orders.initialize();
  }
}

export default Store;
export const reducers = Store.reducers;
export const store = Store.store;
export const dispatch = Store.dispatch;
export const initialState = Store.initialState;
*/
