import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware)
)(createStore);
