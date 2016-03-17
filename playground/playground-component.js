import React, { PropTypes } from 'react';
import { functionName } from './helper';
import HeaderView from './views/header-view';
import Actions from './ui/actions';

const styles = {
  marginBottom: '20px',
  paddingBottom: '20px',
  borderBottom: '1px solid rgba(255, 255, 255, .1)'
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
        if (!this.state) {
          this.state = {};
        }
      }

      this.state[this.constructor.subscribe] = context.store.getState()[this.constructor.subscribe];

      context.store.subscribe(
        () => {
          let newState = {};
          newState[this.constructor.subscribe] = context.store.getState()[this.constructor.subscribe];
          super.setState(newState);
        }
      );
    }

    render() {
      let rendered = super.render();

      return (
        <div style={styles}>
          <HeaderView name={functionName(ComposedComponent)}>
            <Actions actions={this.actions}/>
          </HeaderView>
          <div style={{ marginLeft: '32px', marginTop: '14px', marginBottom: '4px' }}>
            {rendered}
          </div>
        </div>
      );
    }
  }

  return Component;
}

export default function PlaygroundComponent(...args) {
  if (args.length === 1 && typeof args[0] === 'function') {
    return ExtendComposedComponent.apply(null, [[], args[0]]);
  }
  return ExtendComposedComponent.bind(null, args);
}
