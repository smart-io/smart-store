import React, { PropTypes, Component } from 'react';

const styles = {
  container: {
    marginRight: '12px',
    fontSize: '11px',
    border: '1px solid rgba(255, 255, 255, .2)',
    borderRadius: '3px',
    padding: '1px 6px',
    background: 'rgba(255, 255, 255, .04)',
    cursor: 'default'
  },

  containerClick: {
    border: '1px solid #D381C3',
    background: 'rgba(211, 129, 195, .1)',
    cursor: 'pointer'
  },

  label: {
    color: 'rgba(255, 255, 255, .4)',
    marginRight: '8px'
  },

  labelClick: {
    color: '#D381C3'
  },

  value: {
    color: '#FC6D24'
  },

  valueNull: {
    color: 'rgba(255, 255, 255, .5)'
  }
};

class Param extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    total: PropTypes.array
  };

  change = (name) => {
    let value;
    if (value = prompt(name)) {
      this.props.onChange(value);
    }
  };

  render() {
    const { onChange } = this.props;
    let componentStyle = {...styles.container};
    let labelStyle = {...styles.label};

    let onClick;
    if (onChange) {
      onClick = this.change.bind(this, this.props.name);
      componentStyle = {
        ...componentStyle,
        ...styles.containerClick
      };
      labelStyle = {
        ...labelStyle,
        ...styles.labelClick
      };
    }

    let value;
    if (this.props.total) {
      value = 0;
      for (let i = 0, len = this.props.total[0].length; i < len; ++i) {
        value += this.props.total[0][i][this.props.total[1]];
      }
      value = (
        <span style={styles.value}>
          {value}
        </span>
      );
    } else if (this.props.value === undefined || this.props.value === null) {
      value = (
        <span style={styles.valueNull}>
          NULL
        </span>
      );
    } else {
      value = (
        <span style={styles.value}>
          {this.props.value}
        </span>
      );
    }


    return (
      <div style={componentStyle} onClick={onClick}>
        <span style={labelStyle}>
          {this.props.name}:
        </span>
        {value}
      </div>
    );
  }
}

export default Param;
