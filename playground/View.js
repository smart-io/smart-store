import React, { PropTypes } from 'react';
import { functionName } from './Helper';
import HeaderView from './Views/HeaderView';
import Actions from './Ui/Actions';

const styles = {
  marginBottom: '20px',
  paddingTop: '20px',
  paddingBottom: '20px',
  borderBottom: '1px solid rgba(255, 255, 255, .1)',
  borderTop: '1px solid rgba(255, 255, 255, .1)'
};

function ExtendComposedComponent(options, ComposedComponent) {
  class Component extends ComposedComponent {
    static contextTypes = {
      store: PropTypes.object
    };

    constructor(props, context, updater) {
      super(props, context, updater);

      try {
        this.state = JSON.parse(localStorage['component-state-' + functionName(ComposedComponent)]);
      } catch (err) {
      }

      context.store.subscribe(() =>
        this.setState({
          state: context.store.getState()[this.constructor.subscribe]
        })
      );
    }

    render() {
      let rendered = super.render();

      return (
        <div style={styles}>
          <HeaderView name={functionName(ComposedComponent)}>
            <Actions actions={this.actions}/>
          </HeaderView>
          {rendered}
        </div>
      );
    }
  }

  return Component;
}

export default function Item(...args) {
  if (args.length === 1 && typeof args[0] === 'function') {
    return ExtendComposedComponent.apply(null, [[], args[0]]);
  }
  return ExtendComposedComponent.bind(null, args);
}
