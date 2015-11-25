import React, { PropTypes, Component } from 'react';

const styles = {
  container: {
    marginRight: '12px',
    fontSize: '11px',
    border: '1px solid #00b4ff',
    borderRadius: '3px',
    padding: '1px 6px',
    background: 'rgba(0, 180, 255, .1)'
  },

  label: {
    color: '#00b4ff',
    marginRight: '8px'
  },

  value: {
    color: '#FC6D24'
  }
};

class Param extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.any
  };

  render() {
    return (
      <div style={styles.container}>
        <span style={styles.label}>
          {this.props.name}:
        </span>
        <span style={styles.value}>
          {this.props.value}
        </span>
      </div>
    );
  }
}

export default Param;
