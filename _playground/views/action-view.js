import React, { Component } from 'react';

class ActionView extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <span style={{color: '#ffc600'}}>
        {this.props.action.type}
      </span>
    );
  }
}

export default ActionView;
