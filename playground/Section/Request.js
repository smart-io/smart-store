import React, { Component } from 'react';
import Errors from './Errors';
import Loader from '../Ui/Loader';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center'
  },

  method: {
    marginRight: '12px',
    fontSize: '11px',
    border: '1px solid rgba(255, 255, 255, .2)',
    borderRadius: '3px',
    padding: '1px 6px',
    background: 'rgba(255, 255, 255, .04)',
    cursor: 'default'
  },

  url: {

  }
};

class Request extends Component {
  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      loading: false,
      method: null,
      url: null,
      error: null
    };
  }

  render() {
    if (this.state.url) {
      let loading;
      if (this.state.loading) {
        loading = <Loader style={{ marginRight: '12px' }}/>;
      }

      let error, errors = {};
      if (this.state.error) {
        errors[this.state.error + ''] = '';
        error = <Errors errors={errors} style={{ marginTop: '12px' }}/>;
      }

      return (
        <div>
          <div style={styles.container}>
            {loading}
            <span style={styles.method}>
              {this.state.method}
            </span>
            <span style={styles.url}>
              {this.state.url}
            </span>
          </div>
          {error}
        </div>
      );
    }
    return null;
  }
}

export default Request;

