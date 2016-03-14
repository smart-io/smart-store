import React, { PropTypes, Component } from 'react';
import { PlaygroundComponent, View, Section } from '../../playground/index';
import * as OrdersActions from '../../src/orders/orders-actions';
import Request from '../../src/request';
import App from '../../src/index';

@PlaygroundComponent
class GetOrders extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static subscribe = 'orders';

  constructor(...args) {
    super(...args);
    this.state = {
      state: []
    };
  }

  getOrder = () => {
    this.context.store.dispatch(OrdersActions.fetchOrders());
  };

  getAllOrders = () => {
    this.context.store.dispatch(OrdersActions.fetchAllOrders());
  };

  actions = {
    getOrder: this.getOrder,
    getAllOrders: this.getAllOrders
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

  shipOrder = (index) => {
    const order = {...this.state.state[index]};
    order.tracking_number = prompt('Tracking Number', order.tracking_number);
    this.context.store.dispatch(OrdersActions.shipOrder(order));
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
        <Section>
          <Section.Items
            show={['id', 'order_number', 'tracking_number', 'currency', 'total']}
            items={this.state.state}
            shipOrder={this.shipOrder}
          />
        </Section>
      </View>
    );
  }
}

export default GetOrders;
