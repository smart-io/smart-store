import React, { PropTypes, Component } from 'react';
import { PlaygroundComponent, View, Section } from '../../playground/index';
import * as order from '../../src/order/order';
import {defaultAddress} from '../../src/order/address/address';
import {defaultCard} from '../../src/order/card/card';
import {defaultCustomer} from '../../src/order/customer/customer';

@PlaygroundComponent
class PlaceOrder extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static subscribe = 'order';

  convertCartToOrder = () => {
    order.convertCart(this.context.store.getState().cart);
  };

  validateOrder = () => {
    order.validate(this.context.store.getState().order)
      .then(() => { this.setState({ validMessage: 'Order is valid', errors: null })})
      .catch((errors) => { this.setState({ validMessage: null, errors: errors })})
  };

  placeOrder = () => {
    order.place(this.context.store.getState().order)
      .then(function () { console.log('ok'); })
      .catch(function (ee) { console.log(ee, 'not ok'); })
  };

  removeItem = (index) => {
    if (index === undefined) {
      index = prompt('Cart item index');
    }
    order.removeItem(index);
  };

  changeItemQuantity = (index) => {
    const quantity = prompt('New quantity');
    order.changeItemQuantity(index, quantity);
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
            items={this.state.order.items}
            removeItem={this.removeItem}
            changeItemQuantity={this.changeItemQuantity}
          />
        </Section>
        <Section>
          <Section.Param name="Items" value={this.state.order.items ? this.state.order.items.length : 0}/>
          <Section.Param name="Subtotal" value={this.state.order.subtotal}/>
          <Section.Param name="Fees" total={[this.state.order.fees, 'amount']}/>
          <Section.Param name="Taxes" total={[this.state.order.taxes, 'amount']}/>
          <Section.Param name="Total" value={this.state.order.total}/>
          <Section.Param
            name="user_id"
            value={this.state.order.user_id}
            onChange={(value) => { order.update({ user_id: value }) }}
          />
        </Section>
        <Section>
          <Section.Form
            name="Customer"
            defaults={{...defaultCustomer}}
            state={this.state.order.customer}
            action={(state) => { order.updateCustomer(state) }}
          />
          <Section.Form
            name="Shipping Address"
            defaults={{...defaultAddress}}
            state={this.state.order.shipping_address}
            action={(state) => { order.updateShippingAddress(state) }}
          />
          <Section.Form
            name="Billing Address"
            defaults={{...defaultAddress}}
            state={this.state.order.billing_address}
            action={(state) => { order.updateBillingAddress(state) }}
          />
          <Section.Form
            name="Credit Card"
            defaults={{...defaultCard}}
            state={this.state.order.card}
            action={(state) => { order.updateCard(state) }}
          />
        </Section>
      </View>
    );
  }
}

export default PlaceOrder;
