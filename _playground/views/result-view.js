import React, { Component } from 'react';
import JsonViewer from '../Ui/JsonViewer';

class StateView extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    let result;
    try {
      result = this.props.result ? JSON.parse(this.props.result) : null;
    } catch (err) {
    }
    const viewer = result ? <JsonViewer json={result}/> : '';
    return (
      <div style={{marginTop: '8px', marginLeft: '32px'}}>
        <span
          style={{
            fontSize: '11px',
            color: 'gray',
            textTransform: 'uppercase'
          }}
        >
          Response
        </span>
        {viewer}
      </div>
    );
  }
}

export default StateView;
