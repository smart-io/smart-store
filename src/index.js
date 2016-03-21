import reduxStore, { initialSate, setStore } from './app';
import reducers from './reducers';

export function store() {
  return next => (reducer, storeInitialState, enhancer) => {
    function nextReducer() {
      return function (state = {}, action) {
        const { cart, order, orders, taxes, ...storeState } = state;
        state = reducer(storeState, action);
        state = {
          ...state,
          ...reducers({ cart, order, orders, taxes }, action)
        };
        return state;
      };
    }

    let store = next(nextReducer(), { ...initialSate, ...storeInitialState }, enhancer);
    let nextStore = {
      ...store,
      dispatch(...args) {
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

let _config = {
  url: null,
  session: null
};

export function config(...args) {
  let config = {};
  if (args.length > 1) {
    config[args[0]] = args[1];
  } else {
    config = args[0];
  }
  _config = { ...config };
}

export function getConfig() {
  return _config;
}

