import React  from 'react';
import ReactDOM from 'react-dom';
import { compose, applyMiddleware, createStore } from 'redux';
import { logger } from '../playground/logger';
import { Playground } from '../playground/index'
import { storeEnhancer, config, getConfig } from '../src/index';
import Cart from './components/cart';
import Taxes from './components/taxes';
import PlaceOrder from './components/place-order';

let reduxStore = createStore(e => e, {}, compose(
  applyMiddleware(logger),
  storeEnhancer(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render((
  <Playground
    store={reduxStore}
    getConfig={() => getConfig()}
    changeConfig={(key, value) => config(key, value)}
  >
    <Cart/>
    <Taxes/>
    <PlaceOrder/>
  </Playground>
), document.getElementById('main'));
