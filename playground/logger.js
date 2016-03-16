let Logger = {
  dispatcherCallbacks: [],
  nextStateCallbacks: []
};

export const logger = store => next => action => {
  for (let dispatcherCallback of Logger.dispatcherCallbacks) {
    dispatcherCallback(action);
  }
  let result = next(action);
  for (let nextStateCallback of Logger.nextStateCallbacks) {
    nextStateCallback(store.getState());
  }
  return result;
};

export default Logger;
