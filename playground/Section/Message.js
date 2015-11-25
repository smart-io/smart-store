import React, { Component } from 'react';

const styles = {
  message: {
    color: '#67ff4e'
  },
  svg: {
    height: '10px',
    marginRight: '8px'
  }
};

class Message extends Component {
  render() {
    return (
      <div style={styles.message}>
        <svg x="0px" y="0px" viewBox="0 0 10.6 6.6" style={styles.svg}>
          <path
            fill="#67ff4e"
            d="M9.9,0.1L4.2,5.6L0.7,1.9c-0.2-0.2-0.4-0.2-0.6,0C0,2,0,2.3,0.1,2.5l3.8,4C4,6.5,4.1,6.6,4.2,6.6c0.1,0,0.2,0,0.3-0.1l5.9-5.7c0.2-0.2,0.2-0.4,0-0.6C10.3,0,10.1,0,9.9,0.1z"
          />
        </svg>

        {this.props.message}
      </div>
    );
  }
}

export default Message;
