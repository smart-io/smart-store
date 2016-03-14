import React, { Component } from 'react';

class ArrowButton extends Component {
  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      expanded: props.expanded
    };
  }

  toggle = () => {
    this.props.onClick(!this.state.expanded);
    this.setState({expanded: !this.state.expanded});
  };

  render() {
    return (
      <div
        onClick={this.toggle}
        style={{
          display: 'block',
          width: '0',
          height: '0',
          borderBottom: '1px solid gray',
          border: 'solid transparent',
          borderColor: 'rgba(136, 183, 213, 0)',
          borderLeftColor: '#00b4ff',
          borderWidth: '5px',
          marginLeft: '2px',
          transform: this.state.expanded ? 'rotate(90deg)' : 'rotate(0deg)',
          ...this.props.style
        }}
      />
    );
  }
}


export default ArrowButton;
