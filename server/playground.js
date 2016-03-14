import Store, { reducers, initialState } from '../src/index';
import React  from 'react';
import ReactDOM from 'react-dom';
import { devFinalCreateStore, Playground } from '../playground/index';
import Cart from './components/cart';
import PlaceOrder from './components/place-order';
import GetOrders from './components/get-orders';

const store = devFinalCreateStore(reducers, initialState);

ReactDOM.render((
  <Playground store={store} url={(value) => Store.url = value} session={(value) => Store.session = value}>
      <Cart/>
      <PlaceOrder/>
      <GetOrders/>
  </Playground>
), document.getElementById('main'));
