import React  from 'react';
import ReactDOM from 'react-dom';
import { store } from '../src/App';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import Cart from './Components/Cart';

document.body.style.padding = '30px 40px';
document.body.style.color = 'white';
document.body.style.fontFamily = 'monaco, Consolas, Lucida Console, monospace';
document.body.style.fontSize = '12px';
document.body.style.backgroundColor = '#1d1e19';

document.body.innerHTML = `
  <div id="main" style="margin-right: 280px"></div>
`;

var script = document.createElement('script');
script.src = '/webpack-dev-server.js';
document.getElementsByTagName('head')[0].appendChild(script);

const reset = function () {
  for (var prop in localStorage) {
    if (localStorage.hasOwnProperty(prop)) {
      delete localStorage[prop];
    }
  }
  window.location.reload(true);
};

ReactDOM.render((
  <div>
    <button onClick={reset} style={{marginBottom: '20px'}}>Reset</button>
    <div>
      <Cart/>
    </div>
    <DebugPanel top right bottom style={{fontSize: '12px'}}>
      <DevTools store={store} monitor={LogMonitor}/>
    </DebugPanel>
  </div>
), document.getElementById('main'));
