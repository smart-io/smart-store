import React, { Component, PropTypes } from 'react';

const styles = {
  marginRight: '12px',
  marginBottom: '12px',
  fontSize: '11px',
  border: '1px solid gray',
  borderRadius: '3px',
  background: 'rgba(255, 255, 255, .1)',
  padding: '1px 6px',
  color: '#00b4ff',
  cursor: 'pointer'
};

class Field extends Component {
  static contextTypes = {
    component: PropTypes.any
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = { value: props.value };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  changeValue = () => {
    let value;
    if (value = prompt(this.props.name, this.state.value)) {
      this.setState({ value: value });
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  };

  render() {
    let { value, type, name, ...props } = this.props;

    value = this.state.value;

    if (value === null || typeof value === 'undefined') {
      value = <span style={{color: 'gray'}}>null</span>;
    } else {
      if (type === 'password') {
        value = value.replace(/./g, '*');
      }
      value = <span style={{color: 'white'}}>{value}</span>;
    }

    return (
      <div
        style={styles}
        onClick={this.changeValue}
      >
        <span style={{color: 'gray', marginRight: '6px'}}>
          {name}:
        </span>
        {value}
      </div>
    );
  }
}

export default Field;
