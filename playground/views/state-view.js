import React, { Component } from 'react';
import JsonViewer from '../ui/json-viewer';

class StateView extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    const viewer = this.props.state ? <JsonViewer json={this.props.state}/> : '';
    return (
      <div style={{marginTop: '8px', marginLeft: '32px'}}>
        <span
          style={{
            fontSize: '11px',
            color: 'gray',
            textTransform: 'uppercase'
          }}
        >
          State
        </span>
        {viewer}
      </div>
    );
  }
}

export default StateView;
