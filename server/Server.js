import { Config, reducers } from '../src/index';
import React  from 'react';
import ReactDOM from 'react-dom';
import { devFinalCreateStore } from '../playground/ReduxStore';
import Playground from '../playground/Playground';
import index from '../playground/index';
import Cart from './Components/Cart';

const store = devFinalCreateStore(reducers);

ReactDOM.render((
  <Playground store={store} url={(value) => Config.url = value}>
      <Cart/>
  </Playground>
), document.getElementById('main'));
