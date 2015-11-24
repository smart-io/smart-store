import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import thunkMiddleware from 'redux-thunk';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

let Logger = {
  dispatcherCallbacks: [],
  nextStateCallbacks: []
};

const logger = store => next => action => {
  for (let dispatcherCallback of Logger.dispatcherCallbacks) {
    dispatcherCallback(action);
  }
  let result = next(action);
  for (let nextStateCallback of Logger.nextStateCallbacks) {
    nextStateCallback(store.getState());
  }
  return result;
};

const storage = compose(
  filter('nested.key')
)(adapter(window.localStorage));

export const devFinalCreateStore = compose(
  applyMiddleware(thunkMiddleware, logger),
  devTools(),
  persistState(storage, 'redux-playground')
)(createStore);

export default Logger;
