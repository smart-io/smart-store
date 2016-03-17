import reduxStore, { setStore } from './app';

export function store() {
  return next => (reducer, initialState, enhancer) => {
    function nextReducer() {
      return function (state = {}, action) {
        state = reducer(state, action);
        return { ...state, ...reduxStore.getState() };
      };
    }
    let store = next(nextReducer(), initialState, enhancer);
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

