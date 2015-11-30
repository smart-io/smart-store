import Store, { reducers, initialState } from '../src/index';
import React  from 'react';
import ReactDOM from 'react-dom';
import { devFinalCreateStore, Playground } from '../playground/index';
import Cart from './Components/Cart';
import PlaceOrder from './Components/PlaceOrder';
import GetOrders from './Components/GetOrders';

const store = devFinalCreateStore(reducers, initialState);

ReactDOM.render((
  <Playground store={store} url={(value) => Store.url = value}>
      <Cart/>
      <PlaceOrder/>
      <GetOrders/>
  </Playground>
), document.getElementById('main'));
