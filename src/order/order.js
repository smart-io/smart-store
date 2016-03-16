import { createStore, combineReducers } from '../app';
import * as orderActions from './order-actions';
import Address from './address/address';
import { default as shippingAddress, default as billingAddress } from './address/address-reducers';
import Customer from './customer/customer';
import customer from './customer/customer-reducers';
import Card from './card/card';
import card from './card/card-reducers';
import taxes from './taxes/taxes-reducers';
import * as taxesActions from './taxes/taxes-actions';
import items from './items/items-reducers';
import fees from './fees/fees-reducers';

class Order {
  constructor(attributes) {
    let defaults = {
      id: null,
      userId: null,
      orderNumber: null,
      status: null,
      trackingNumber: null,
      currency: 'USD',
      shippingAddress: { ...new Address },
      billingAddress: { ...new Address },
      customer: { ...new Customer },
      card: { ...new Card },
      items: [],
      subtotal: 0,
      fees: [],
      taxes: [],
      total: 0
    };

    if (attributes) {
      for (const key of Object.keys(attributes)) {
        defaults[key] = attributes[key];
      }
    }

    // APPARENTLY ALL I NEED IS ONE STORE LOL

    /*this._store = createStore(
      combineReducers(
        shippingAddress,
        billingAddress,
        customer,
        card,
        items,
        fees,
        taxes
      ),
      defaults
    );*/
  }
/*
  get id() { return this._store.getState().id; }
  set id(value) { this._store.dispatch(orderActions.updateOrder({ id: value })); }

  get userId() { return this._store.getState().userId; }
  set userId(value) { this._store.dispatch(orderActions.updateOrder({ userId: value })); }

  get orderNumber() { return this._store.getState().orderNumber; }
  set orderNumber(value) { this._store.dispatch(orderActions.updateOrder({ orderNumber: value })); }

  get status() { return this._store.getState().status; }
  set status(value) { this._store.dispatch(orderActions.updateOrder({ status: value })); }

  get trackingNumber() { return this._store.getState().trackingNumber; }
  set trackingNumber(value) { this._store.dispatch(orderActions.updateOrder({ trackingNumber: value })); }

  get currency() { return this._store.getState().currency; }
  set currency(value) { this._store.dispatch(orderActions.updateOrder({ currency: value })); }

  get taxes() { return this._store.getState().taxes; }
  set taxes(taxes) { this._store.dispatch(taxesActions.resetTaxes(taxes)); }
  addTax(tax) { dispatch(taxesActions.addTax(tax)); }
  removeTax(index) { dispatch(taxesActions.removeTax(index)); }



  static calculateAmounts(order) {
    let subtotal = 0;
    order.items.forEach((item) => {
      subtotal += item.subtotal;
    });
    return {
      ...order,
      subtotal: subtotal,
      total: subtotal
    };
  }

  update(data) {
    return dispatch(Actions.updateOrder(data));
  }

  static update(order, data) {
    return {
      ...new Order,
      ...order,
      ...data
    };
  }

  convertCartToOrder(cart) {
    return dispatch(Actions.convertCartToOrder(cart));
  }

  static convertCartToOrder(order, cart) {
    return Order.calculateAmounts({
      ...new Order,
      ...order,
      items: [...cart.items]
    });
  }

  changeBillingAddress(address) {
    return dispatch(Actions.changeOrderBillingAddress(address));
  }

  static changeBillingAddress(order, address) {
    return {
      ...new Order,
      ...order,
      billing_address: { ...new Address, ...address }
    };
  }

  changeShippingAddress(address) {
    return dispatch(Actions.changeOrderShippingAddress(address));
  }

  static changeShippingAddress(order, address) {
    return {
      ...new Order,
      ...order,
      shipping_address: { ...new Address, ...address }
    };
  }

  changeCustomer(customer) {
    return dispatch(Actions.changeOrderCustomer(customer));
  }

  static changeCustomer(order, customer) {
    return {
      ...new Order,
      ...order,
      customer: { ...new Customer, ...customer }
    };
  }

  changeCard(card) {
    return dispatch(Actions.changeOrderCard(card));
  }

  static changeCard(order, card) {
    return {
      ...new Order,
      ...order,
      card: { ...new Card, ...card }
    };
  }

  changeCurrency(currency) {
    return dispatch(Actions.changeOrderCurrency(currency));
  }

  static changeCurrency(order, currency) {
    return {
      ...new Order,
      ...order,
      currency: currency
    };
  }

  validate() {
    return dispatch(Actions.validateOrder());
  }

  place() {
    return dispatch(Actions.placeOrder());
  }*/
}

export default Order;
