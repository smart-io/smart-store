import React  from 'react';
import ReactDOM from 'react-dom';
import { compose, applyMiddleware, createStore } from 'redux';
import { logger } from '../playground/logger';
import { Playground } from '../playground/index'
import { store, config, getConfig } from '../src/index';
import Cart from './components/cart';
import PlaceOrder from './components/place-order';
//import GetOrders from './components/get-orders';

let reduxStore = createStore(e => e, {}, compose(
  applyMiddleware(logger),
  store(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render((
  <Playground
    store={reduxStore}
    getConfig={() => getConfig()}
    changeConfig={(key, value) => config(key, value)}
  >
    <Cart/>
    <PlaceOrder/>
  </Playground>
), document.getElementById('main'));

/*      <Cart/>
 <PlaceOrder/>
 <GetOrders/>
*/
