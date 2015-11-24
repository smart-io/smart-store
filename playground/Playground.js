import React, { Component, PropTypes } from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const styles = {
  reset: {
    WebkitApperance: 'none',
    marginRight: '12px',
    border: '1px solid #ff3900',
    borderRadius: '3px',
    background: 'rgba(255, 57, 0, .2)',
    color: '#ff3900',
    cursor: 'pointer',
    marginBottom: '20px'
  }
};

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
        <button onClick={this.reset} style={styles.reset}>Reset</button>
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
