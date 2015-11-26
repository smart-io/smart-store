import { store, dispatch } from '../App';
import Address from '../Address/Address';
import Customer from '../Customer/Customer';
import Card from '../Card/Card';
import * as Actions from './OrderActions';

class Order {
  /**
   * @type {Number}
   */
  id = null;

  /**
   * @type {String}
   */
  user_id = null;

  /**
   * @type {String}
   */
  order_number = null;

  /**
   * @type {String}
   */
  status = null;

  /**
   * @type {String}
   */
  currency = 'USD';

  /**
   * @type {Object|Address}
   */
  shipping_address = { ...new Address };

  /**
   * @type {Object|Address}
   */
  billing_address = { ...new Address };

  /**
   * @type {Object|Customer}
   */
  customer = { ...new Customer };

  /**
   * @type {Object|Card}
   */
  card = { ...new Card };

  /**
   * @type {Array.<Item>}
   */
  items = [];

  /**
   * @type {Number}
   */
  subtotal = 0;

  /**
   * @type {Array.<Object>}
   */
  fees = [];

  /**
   * @type {Array.<Tax>}
   */
  taxes = [];

  /**
   * @type {Number}
   */
  total = 0;

  constructor(attributes) {
    if (attributes) {
      for (const key in Object.keys(attributes)) {
        this[key] = attributes[key];
      }
    }
  }

  static initialize() {
    return new Order(store.getState().order);
  }

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

  validate() {
    return dispatch(Actions.validateOrder());
  }

  place() {
    return dispatch(Actions.placeOrder());
  }
}

export default Order;
