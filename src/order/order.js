import { createStore, combineReducers } from '../app';
import * as order from './order-actions';
import address from './address/address';
import Customer from './customer/customer';
import Card from './card/card';
import * as addressActions from './address/address-actions';

export function convertCart(cart) {
  return dispatch(order.convertCartToOrder(cart));
}

export function update(data) {
  return dispatch(order.updateOrder(data));
}

export function changeBillingAddress(address) {
  return dispatch(addressActions.changeOrderAddress('billing', address));
}

export function changeShippingAddress(address) {
  return dispatch(addressActions.changeOrderAddress('shipping', address));
}


export default {
  id: null,
  userId: null,
  orderNumber: null,
  status: null,
  trackingNumber: null,
  currency: 'USD',
  shippingAddress: { ...address },
  billingAddress: { ...new Address },
  customer: { ...new Customer },
  card: { ...new Card },
  items: [],
  subtotal: 0,
  fees: [],
  taxes: [],
  total: 0
};


class Order {
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

//export default Order;
