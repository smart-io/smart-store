import React, { PropTypes, Component } from 'react';
import { PlaygroundComponent, View, Section } from '../../playground/index';
import * as Actions from '../../src/Orders/OrdersActions';
import Request from '../../src/Request';
import App from '../../src/index';

@PlaygroundComponent
class GetOrders extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static subscribe = 'orders';

  getOrders = () => {
    this.context.store.dispatch(Actions.fetchOrders());
  };

  actions = {
    getOrders: this.getOrders
  };

  componentDidMount() {
    Request.on('fetch', this.onFetch);
    Request.on('success', this.onSuccess);
    Request.on('error', this.onError);
  }

  onFetch = (data) => {
    let url = data.url.replace(App.url, '');
    if (url.match(/^\/orders/)) {
      this.refs.request.setState({ loading: true, ...data, error: null });
    }
  };

  onSuccess = (data) => {
    if (this.isOwnRequest(data)) {
      this.refs.request.setState({ loading: false, error: null });
    }
  };

  onError = (data) => {
    if (this.isOwnRequest(data)) {
      this.refs.request.setState({ loading: false, error: data.response });
    }
  };

  isOwnRequest(data) {
    let url = data.url.replace(App.url, '');
    return url.match(/^\/orders/);
  }

  render() {
    return (
      <View>
        <Section>
          <Section.Request ref="request"/>
        </Section>
      </View>
    );
  }
}

export default GetOrders;
