import React, { Component } from 'react';

class StateInfoView extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <span style={{color: this.props.type === 'Object' ? '#A1C659' : '#D381C3'}}>
        {this.props.type}
        ({this.props.count})
      </span>
    );
  }
}

export default StateInfoView;
