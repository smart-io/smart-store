import Address from '../Address/Address';
import Customer from '../Customer/Customer';
import Card from '../Card/Card';

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

  static updateOrder(order, data) {
    return {
      ...new Order,
      ...order,
      ...data
    };
  }

  static convertCartToOrder(order, cart) {
    return Order.calculateAmounts({
      ...new Order,
      ...order,
      items: [...cart.items]
    });
  }

  static changeOrderBillingAddress(order, address) {
    return {
      ...new Order,
      ...order,
      billing_address: { ...new Address, ...address }
    };
  }

  static changeOrderShippingAddress(order, address) {
    return {
      ...new Order,
      ...order,
      shipping_address: { ...new Address, ...address }
    };
  }

  static changeOrderCustomer(order, customer) {
    return {
      ...new Order,
      ...order,
      customer: { ...new Customer, ...customer }
    };
  }

  static changeOrderCard(order, card) {
    return {
      ...new Order,
      ...order,
      card: { ...new Card, ...card }
    };
  }
}

export default Order;
