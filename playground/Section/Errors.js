import React, { Component } from 'react';

const styles = {
  message: {
    color: '#ff3900'
  },
  svg: {
    height: '10px',
    marginRight: '8px'
  }
};

class Errors extends Component {
  render() {
    const { style, ...props } = this.props;

    let errors = '';
    for (const error of Object.keys(this.props.errors)) {
      errors = errors + error;
    }

    let componentStyle = {...styles.message, ...style};

    return (
      <div style={componentStyle}>
        <svg x="0px" y="0px" viewBox="0 0 8.7 8.7" style={styles.svg}>
          <path
            fill="#ff3900"
            d="M8.1,0.3L4.4,3.8L0.8,0.1C0.7,0,0.4,0,0.3,0.1c-0.2,0.2-0.2,0.4,0,0.6l3.5,3.7L0.1,7.9C0,8.1,0,8.3,0.1,8.5
	c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.3-0.1L4.4,5l3.5,3.7C8,8.7,8.1,8.7,8.2,8.7c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.4,0-0.6
	L5,4.4l3.7-3.5c0.2-0.2,0.2-0.4,0-0.6C8.5,0.1,8.2,0.1,8.1,0.3z"
          />
        </svg>
        Errors: {errors}
      </div>
    );
  }
}

export default Errors;
