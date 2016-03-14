import React, { Component } from 'react';

class ErrorView extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', color: 'red', marginLeft: '20px'}}>
        <svg x="0px" y="0px" viewBox="0 0 12 12" style={{width: '12px', height: '12px', marginRight: '12px'}}>
          <path
            fill="red"
            d="M11.7,0.3c-0.4-0.4-1-0.4-1.4,0L6,4.6L1.7,0.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L4.6,6l-4.3,4.3
            c-0.4,0.4-0.4,1,0,1.4C0.5,11.9,0.7,12,1,12s0.5-0.1,0.7-0.3L6,7.4l4.3,4.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
            c0.4-0.4,0.4-1,0-1.4L7.4,6l4.3-4.3C12.1,1.3,12.1,0.7,11.7,0.3z"
          />
        </svg>

        {this.props.error}
      </div>
    );
  }
}

export default ErrorView;
