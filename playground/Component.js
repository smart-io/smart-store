import React, { PropTypes } from 'react';

const styles = {
  marginBottom: '20px',
  paddingBottom: '20px',
  borderBottom: '1px solid rgba(255, 255, 255, .05)'
};

class Component extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    console.log(this.render);
  }

  render() {
    console.log(this.context.store);
    return (
      <div style={styles}>
        helloe
      </div>
    );
  }
}

export default Component;
