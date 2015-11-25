import React, { PropTypes, Component } from 'react';

const styles = {
  container: {
    marginRight: '12px',
    fontSize: '11px',
    border: '1px solid #D381C3',
    borderRadius: '3px',
    padding: '1px 6px',
    background: 'rgba(211, 129, 195, .1)'
  },

  label: {
    color: '#D381C3',
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
