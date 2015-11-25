import React, { PropTypes, Component } from 'react';

const styles = {
  button: {
    WebkitApperance: 'none',
    marginRight: '12px',
    border: '1px solid #a8ff00',
    borderRadius: '3px',
    background: 'rgba(168, 255, 0, .2)',
    color: '#a8ff00',
    cursor: 'pointer'
  },

  red: {
    border: '1px solid #ff3900',
    background: 'rgba(255, 57, 0, .2)',
    color: '#ff3900'
  },

  blue: {
    border: '1px solid #00b4ff',
    background: 'rgba(0, 180, 255, .2)',
    color: '#00b4ff'
  }
};

class Action extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.func
  };

  render() {
    const { name, color, action } = this.props;
    let componentStyle = {...styles.button};

    if (color) {
      componentStyle = {
        ...componentStyle,
        ...styles[color]
      }
    }

    return (
      <button
        key={name}
        onClick={action}
        style={componentStyle}
      >
        {name}
      </button>
    );
  }
}

export default Action;
