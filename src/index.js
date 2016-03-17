import reduxStore, { initialSate, setStore } from './app';
import reducers from './reducers';

export function store() {
  return next => (reducer, storeInitialState, enhancer) => {
    function nextReducer() {
      return function (state = {}, action) {
        const { cart, order, orders, ...storeState } = state;
        state = reducer(storeState, action);
        state = {
          ...state,
          ...reducers({ cart: cart, order: order, orders: orders }, action)
        };
        return state;
      };
    }

    let store = next(nextReducer(), { ...initialSate, ...storeInitialState }, enhancer);
    let nextStore = {
      ...store,
      dispatch(...args) {
        reduxStore.dispatch(...args);
        store.dispatch(...args);
        return args[0];
      },
      getState() {
        return { ...reduxStore.getState(), ...store.getState() };
      }
    };

    setStore(nextStore);
    return nextStore;
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

