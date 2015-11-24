import React, { Component, PropTypes } from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

class Playground extends Component {
  static childContextTypes = {
    store: PropTypes.object
  };

  constructor(...args) {
    super(...args);
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  reset = () => {
    for (var prop in localStorage) {
      if (localStorage.hasOwnProperty(prop)) {
        delete localStorage[prop];
      }
    }
    window.location.reload(true);
  };

  render() {
    return (
      <div>
        <button onClick={this.reset} style={{marginBottom: '20px'}}>Reset</button>
        <div>
          {this.props.children}
        </div>
        <DebugPanel top right bottom style={{fontSize: '12px'}}>
          <DevTools store={this.props.store} monitor={LogMonitor}/>
        </DebugPanel>
      </div>
    );
  }
}

export default Playground;
