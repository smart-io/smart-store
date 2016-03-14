import Logger from './ReduxStore';
import React, { Component, PropTypes } from 'react';
import HeaderView from './Views/HeaderView';
import { functionName } from './Helper';
import RequestView from './Views/RequestView';
import FieldsView from './Views/FieldsView';
import ResultView from './Views/ResultView';

class RequestComponent extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

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

  render() {
    const fields = this.constructor.fields ? <FieldsView state={this.state} fields={this.constructor.fields}/> : '';
    const result = this.state.actionResult ? <ResultView result={this.state.actionResult}/> : '';

    let content;
    if (this.state.expanded) {
      content = (
        <div>
          {fields}
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
        >
          <RequestView actions={this.constructor.actions} fields={this.constructor.fields}/>
        </HeaderView>
        {content}
      </div>
    );
  }
}

export default RequestComponent;
