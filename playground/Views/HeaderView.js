import React, { Component, PropTypes } from 'react';
import ArrowButton from '../Resources/ArrowButton';
import ErrorView from './ErrorView';
import ActionView from './ActionView';
import StateInfoView from './StateInfoView';
import Loader from '../Resources/Loader';

class HeaderView extends Component {
  static contextTypes = {
    component: PropTypes.any,
    expanded: PropTypes.bool
  };

  constructor(...args) {
    super(...args);
  }

  toggleExpanded = (value) => {
    this.context.component.setState({expanded: value});
  };

  render() {
    const errorView = this.props.error ? <ErrorView error={this.props.error}/> : '';
    const loader = this.props.loading ? <Loader/> : '';
    const action = this.props.action ? <ActionView action={this.props.action}/> : '';

    let type, count = 0;
    if (typeof this.props.state === 'object') {
      if (this.props.state.constructor === Array) {
        type = 'Array';
        count = this.props.state.length;
      } else {
        type = 'Object';
        for (var prop in this.props.state) {
          if (this.props.state.hasOwnProperty(prop)) {
            count++;
          }
        }
      }
    }

    const state = type ? <StateInfoView type={type} count={count}/> : '';

    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '20px'
      }}
      >
        <div
          style={{
            display: 'flex',
            flexGrow: '1',
            flexShrink: '0',
            alignItems: 'center',
            height: '20px'
          }}
        >
          <ArrowButton expanded={this.context.expanded} onClick={this.toggleExpanded} style={{marginRight: '20px'}}/>
          <span style={{marginRight: '12px'}}>
            {this.props.name}
          </span>
          {this.props.children}
          <span style={{marginRight: '12px'}}>
            {action}
          </span>
          <span style={{marginRight: '12px'}}>
            {state}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexGrow: '0',
            flexShrink: '1',
            alignItems: 'center',
            height: '20px'
          }}
        >
          {loader}
          {errorView}
        </div>
      </div>
    );
  }
}

export default HeaderView;
