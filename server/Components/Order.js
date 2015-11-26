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

  validateOrder = () => {
    this.context.store.dispatch(OrderActions.validateOrder(this.context.store.getState().order))
      .then(() => { this.setState({ validMessage: 'Order is valid', errors: null })})
      .catch((errors) => { this.setState({ validMessage: null, errors: errors })})
  };

  placeOrder = () => {
    this.context.store.dispatch(OrderActions.placeOrder(this.context.store.getState().order))
      .then(function () { console.log('ok'); })
      .catch(function (ee) { console.log(ee, 'not ok'); })
  };

  actions = {
    convertCartToOrder: this.convertCartToOrder,
    validateOrder: this.validateOrder,
    placeOrder: this.placeOrder
  };

  render() {
    let messages;
    if (this.state.validMessage) {
      messages = (
        <Section>
          <Section.Message message={this.state.validMessage}/>
        </Section>
      );
    } else if (this.state.errors) {
      messages = (
        <Section>
          <Section.Errors errors={this.state.errors}/>
        </Section>
      );
    }

    return (
      <View>
        {messages}
        <Section>
          <Section.Items
            showTotals={['quantity', 'price', 'subtotal']}
            items={this.state.state.items}
          />
        </Section>
        <Section>
          <Section.Param name="Items" value={this.state.state.items ? this.state.state.items.length : 0}/>
          <Section.Param name="Subtotal" value={this.state.state.subtotal}/>
          <Section.Param name="Total" value={this.state.state.total}/>
          <Section.Param
            name="user_id"
            value={this.state.state.user_id}
            onChange={(value) => { this.context.store.dispatch(OrderActions.updateOrder({ user_id: value })) }}
          />
        </Section>
        <Section>
          <Section.Form
            name="Customer"
            defaults={new Customer}
            state={this.state.state.customer}
            action={(state) => { this.context.store.dispatch(OrderActions.changeOrderCustomer(state)) }}
          />
          <Section.Form
            name="Shipping Address"
            defaults={new Address}
            state={this.state.state.shipping_address}
            action={(state) => { this.context.store.dispatch(OrderActions.changeOrderShippingAddress(state)) }}
          />
          <Section.Form
            name="Billing Address"
            defaults={new Address}
            state={this.state.state.billing_address}
            action={(state) => { this.context.store.dispatch(OrderActions.changeOrderBillingAddress(state)) }}
          />
          <Section.Form
            name="Credit Card"
            defaults={new Card}
            state={this.state.state.card}
            action={(state) => { this.context.store.dispatch(OrderActions.changeOrderCard(state)) }}
          />
        </Section>
      </View>
    );
  }
}

export default Order;
