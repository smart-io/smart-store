import React, { Component, PropTypes } from 'react';

class FieldsView extends Component {
  static contextTypes = {
    component: PropTypes.any
  };

  constructor(...args) {
    super(...args);
  }

  changeValue = (name) => {
    let value;
    let state = {};
    if (value = prompt(name)) {
      state[name] = value;
      this.context.component.setState(state);
    }
  };

  render() {
    let fields = [];
    for (var prop in this.props.fields) {
      if (this.props.fields.hasOwnProperty(prop)) {
        fields = [...fields, this.renderField(prop, this.props.fields[prop], this.props.state[prop])];
      }
    }

    return (
      <div
        style={{
          display: 'flex',
          marginTop: '10px',
          marginLeft: '32px'
        }}
      >
        {fields}
      </div>
    );
  }

  renderField(name, type, value) {
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
        key={name}
        style={{
          marginRight: '12px',
          fontSize: '11px',
          border: '1px solid gray',
          borderRadius: '3px',
          background: 'rgba(255, 255, 255, .1)',
          padding: '1px 6px',
          color: '#00b4ff',
          cursor: 'pointer'
        }}
        onClick={this.changeValue.bind(this, name)}
      >
        <span style={{color: 'gray', marginRight: '6px'}}>
          {name}:
        </span>
        {value}
      </div>
    );
  }
}

export default FieldsView;
