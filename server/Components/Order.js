import React, { PropTypes, Component } from 'react';
import { PlaygroundComponent, View, Section } from '../../playground/index';
import { Order as OrderActions } from '../../src/index';
import Address from '../../src/Address/Address';
import Card from '../../src/Card/Card';
import Customer from '../../src/Customer/Customer';

@PlaygroundComponent
class Order extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static subscribe = 'order';

  convertCartToOrder = () => {
    this.context.store.dispatch(OrderActions.convertCartToOrder(this.context.store.getState().cart));
  };

  actions = {
    convertCartToOrder: this.convertCartToOrder
  };

  render() {
    return (
      <View>
        <Section>
          <Section.Param name="Items" value={this.state.state.items ? this.state.state.items.length : 0}/>
        </Section>
        <Section>
          <Section.Items
            showTotals={['quantity', 'price', 'subtotal']}
            items={this.state.state.items}
          />
        </Section>
        <Section>
          <Section.Form
            name="Customer"
            defaults={Customer}
            state={this.state.state.customer}
            action={(state) => { this.context.store.dispatch(OrderActions.changeOrderCustomer(state)) }}
          />
          <Section.Form
            name="Shipping Address"
            defaults={Address}
            state={this.state.state.shippingAddress}
            action={(state) => { this.context.store.dispatch(OrderActions.changeOrderShippingAddress(state)) }}
          />
          <Section.Form
            name="Billing Address"
            defaults={Address}
            state={this.state.state.billingAddress}
            action={(state) => { this.context.store.dispatch(OrderActions.changeOrderBillingAddress(state)) }}
          />
          <Section.Form
            name="Credit Card"
            defaults={Card}
            state={this.state.state.card}
            action={(state) => { this.context.store.dispatch(OrderActions.changeOrderCard(state)) }}
          />
        </Section>
      </View>
    );
  }
}

export default Order;
