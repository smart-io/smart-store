import Logger from '../src/Store/DevStore';
import { store } from '../src/App';
import React, { Component, PropTypes } from 'react';
import HeaderView from './Views/HeaderView';
import { functionName } from './Helper';
import RequestView from './Views/RequestView';
import StateView from './Views/StateView';
import ResultView from './Views/ResultView';

class StateComponent extends Component {
  static childContextTypes = {
    component: PropTypes.any,
    expanded: PropTypes.bool
  };

  constructor() {
    super();
    try {
      this.state = JSON.parse(localStorage['component-state-' + functionName(this.constructor)]);
    } catch (err) {
    }
    if (!this.state) {
      this.state = {
        expanded: true,
        error: null
      };
    }
    store.subscribe(() =>
      this.setState({
        state: this.getReduxState()
      })
    );
    Logger.dispatcherCallbacks = [...Logger.dispatcherCallbacks, this.dispatcherCallback];
  }

  dispatcherCallback = (action) => {
    if (this.constructor.types && typeof this.constructor.types[action.type] !== 'undefined') {
      this.setState({
        action: action
      });
    }
  };

  componentDidUpdate() {
    localStorage['component-state-' + functionName(this.constructor)] = JSON.stringify(this.state);
  }

  getChildContext() {
    return {
      component: this,
      expanded: this.state.expanded
    };
  }

  getReduxState() {
    const states = store.getState();
    const stateName = functionName(this.constructor).replace(/([A-Z])/g, function (g) {
      return `_${g.toLowerCase()}`;
    }).replace(/^_/, '');
    return states[stateName] || null;
  }

  render() {
    const result = this.state.actionResult ? <ResultView result={this.state.actionResult}/> : '';

    let content;
    if (this.state.expanded) {
      content = (
        <div>
          <StateView state={this.state.state}/>
          {result}
        </div>
      );
    }

    return (
      <div
        style={{
          marginBottom: '20px',
          paddingBottom: '20px',
          borderBottom: '1px solid gray'
        }}
      >
        <HeaderView
          name={functionName(this.constructor)}
          error={this.state.error}
          loading={this.state.loading}
          action={this.state.action}
          state={this.state.state}
        >
          <RequestView actions={this.constructor.actions}/>
        </HeaderView>
        {content}
      </div>
    );
  }
}

export default StateComponent;
