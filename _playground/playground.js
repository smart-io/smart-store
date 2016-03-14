import React, { Component, PropTypes } from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import Field from './Ui/Field';
import Action from './Ui/Action';

document.body.innerHTML = `
  <div id="main" style="margin-right: 280px"></div>
`;

let script = document.createElement('script');
script.src = '/webpack-dev-server.js';
document.getElementsByTagName('head')[0].appendChild(script);

document.body.style.padding = '30px 40px';
document.body.style.color = 'white';
document.body.style.fontFamily = 'monaco, Consolas, Lucida Console, monospace';
document.body.style.fontSize = '12px';
document.body.style.backgroundColor = '#141517';

const styles = {
  controls: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: '20px'
  },

  itemContainer: {
    borderTop: '1px solid rgba(255, 255, 255, .1)',
    paddingTop: '20px'
  }
};

class Playground extends Component {
  static childContextTypes = {
    store: PropTypes.object,
    url: PropTypes.func,
    session: PropTypes.func
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
    if (typeof this.props.session === 'function') {
      this.props.session(this.state.session);
    }
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  componentDidUpdate() {
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

  changeUrl = (value) => {
    this.setState({ url: value });
    if (typeof this.props.url === 'function') {
      this.props.url(value);
    }
  };

  changeSession = (value) => {
    this.setState({ session: value });
    if (typeof this.props.session === 'function') {
      this.props.session(value);
    }
  };

  render() {
    return (
      <div>
        <div style={styles.controls}>
          <div style={{marginRight: 'auto', display: 'flex', flexWrap: 'wrap' }}>
            {!this.props.url || <Field name="URL" value={this.state.url} onChange={this.changeUrl}/>}
            {!this.props.session || <Field name="Session" value={this.state.session} onChange={this.changeSession}/>}
          </div>
          <Action color="red" name="Reset" action={this.reset}/>
        </div>

        <div style={styles.itemContainer}>
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