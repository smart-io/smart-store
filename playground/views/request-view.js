import { dispatch } from '../../src/app';
import React, { Component, PropTypes } from 'react';

class ActionsView extends Component {
  static contextTypes = {
    component: PropTypes.any
  };

  constructor(...args) {
    super(...args);
  }

  getData() {
    let returnValue = {};
    for (var prop in this.props.fields) {
      if (this.props.fields.hasOwnProperty(prop)) {
        returnValue[prop] = this.context.component.state[prop];
      }
    }

    return returnValue
  }

  render() {
    let actions = [];
    for (var prop in this.props.actions) {
      if (this.props.actions.hasOwnProperty(prop)) {
        actions = [...actions, this.renderAction(prop, this.props.actions[prop])];
      }
    }

    return (
      <div>
        {actions}
      </div>
    );
  }

  renderAction(name, action, callback) {
    return (
      <button
        key={name}
        onClick={callback || this.onClick.bind(this, action)}
        style={{
          WebkitApperance: 'none',
          marginRight: '12px',
          border: '1px solid #00b4ff',
          borderRadius: '3px',
          background: 'rgba(0, 180, 255, .2)',
          color: '#00b4ff',
          cursor: 'pointer'
        }}
      >
        {name}
      </button>
    );
  }

  onClick(action) {
    this.context.component.setState({
      loading: true,
      error: null,
      actionResult: null
    });

    dispatch(action(this.getData()))
      .then(this.onSuccess)
      .catch(this.onError)
  }

  onSuccess = (action) => {
    let param;
    if (action) {
      const { type, ...params } = action;
      let count = 0;
      for (var prop in params) {
        if (params.hasOwnProperty(prop)) {
          param = params[prop];
          count++;
        }
      }

      if (count !== 1) {
        param = params;
      }
    }

    this.context.component.setState({
      loading: false,
      actionResult: param ? JSON.stringify(param) : null
    });
  };

  onError = (err) => {
    let message;
    if (err instanceof Error) {
      message = err.message;
    } else {
      if (err.error) {
        message = 'Error: ' + err.error;
      } else {
        message = 'Error';
      }
    }

    this.context.component.setState({
      loading: false,
      error: message,
      actionResult: JSON.stringify(err)
    });
  };
}

export default ActionsView;
