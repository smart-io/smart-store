import { reducers } from '../src/App';
import React  from 'react';
import ReactDOM from 'react-dom';
import { devFinalCreateStore } from './ReduxStore';
import Playground from './Playground';
import Cart from './Components/Cart';

document.body.style.padding = '30px 40px';
document.body.style.color = 'white';
document.body.style.fontFamily = 'monaco, Consolas, Lucida Console, monospace';
document.body.style.fontSize = '12px';
document.body.style.backgroundColor = '#1d1e19';

document.body.innerHTML = `
  <div id="main" style="margin-right: 280px"></div>
`;

let script = document.createElement('script');
script.src = '/webpack-dev-server.js';
document.getElementsByTagName('head')[0].appendChild(script);

const store = devFinalCreateStore(reducers);

ReactDOM.render((
  <Playground store={store}>
      <Cart/>
  </Playground>
), document.getElementById('main'));
