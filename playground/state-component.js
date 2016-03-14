import Logger from './redux-store';
import React, { Component, PropTypes } from 'react';
import HeaderView from './views/header-view';
import { functionName } from './helper';
import RequestView from './views/request-view';
import StateView from './views/state-view';
import ResultView from './views/result-view';

class StateComponent extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static childContextTypes = {
    component: PropTypes.any,
    expanded: PropTypes.bool
  };

  constructor(props, context, updater) {
    super(props, context, updater);
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
    context.store.subscribe(() =>
      this.setState({
        state: this.getReduxState()
      })
    );
    Logger.dispatcherCallbacks = [...Logger.dispatcherCallbacks, this.dispatcherCallback];
  }

  getChildContext() {
    return {
      component: this,
      expanded: this.state.expanded
    };
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

  getReduxState() {
    const states = this.context.store.getState();
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
          <RequestView actions={this.constructor.actions} callbacks={this.constructor.callbacks}/>
        </HeaderView>
        {content}
      </div>
    );
  }
}

export default StateComponent;
