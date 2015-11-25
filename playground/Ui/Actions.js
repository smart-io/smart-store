import React, { Component, PropTypes } from 'react';
import Action from './Action';

const styles = {
  span: {
    fontSize: '11px',
    textTransform: 'uppercase',
    marginRight: '12px',
    marginLeft: '32px',
    color: 'rgba(168, 255, 0, .4)'
  }
};

class Actions extends Component {
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
        <span style={styles.span}>Actions</span>
        {actions}
      </div>
    );
  }

  renderAction(name, action) {
    return (
      <Action key={name} name={name}
        action={this.action.bind(this, action)}
      />
    );
  }

  action = (action) => {
    action();
  };

  onClick() {
    /*this.context.component.setState({
      loading: true,
      error: null,
      actionResult: null
    });

    dispatch(action(this.getData()))
      .then(this.onSuccess)
      .catch(this.onError)*/
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

export default Actions;
