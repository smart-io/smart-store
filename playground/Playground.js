import React, { Component, PropTypes } from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import Field from './Ui/Field';

const styles = {
  reset: {
    WebkitApperance: 'none',
    marginRight: '12px',
    border: '1px solid #ff3900',
    borderRadius: '3px',
    background: 'rgba(255, 57, 0, .2)',
    color: '#ff3900',
    cursor: 'pointer',
  },

  controls: {
    display: 'flex',
    marginBottom: '20px'
  }
};

class Playground extends Component {
  static childContextTypes = {
    store: PropTypes.object,
    url: PropTypes.func
  };

  constructor(...args) {
    super(...args);
    try {
      this.state = JSON.parse(localStorage['playground-state']);
    } catch (e) {
      this.state = {};
    }
    if (typeof this.props.url === 'function') {
      this.props.url(this.state.url);
    }
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage['playground-state'] = JSON.stringify(this.state);
  }

  reset = () => {
    for (var prop in localStorage) {
      if (localStorage.hasOwnProperty(prop)) {
        delete localStorage[prop];
      }
    }
    window.location.reload(true);
  };

  changeUrl = (valye) => {
    this.setState({ url: value });
    if (typeof this.props.url === 'function') {
      this.props.url(value);
    }
  };

  render() {
    return (
      <div>
        <div style={styles.controls}>
          <div style={{marginRight: 'auto'}}>
            {!this.props.url || <Field name="URL" value={this.state.url} onChange={this.changeUrl}/>}
          </div>
          <button onClick={this.reset} style={styles.reset}>Reset</button>
        </div>

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
