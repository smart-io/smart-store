import { Config, reducers, initialState } from '../src/index';
import React  from 'react';
import ReactDOM from 'react-dom';
import { devFinalCreateStore, Playground } from '../playground/index';
import Cart from './Components/Cart';
import Order from './Components/Order';

const store = devFinalCreateStore(reducers, initialState);

ReactDOM.render((
  <Playground store={store} url={(value) => Config.url = value}>
      <Cart/>
      <Order/>
  </Playground>
), document.getElementById('main'));
