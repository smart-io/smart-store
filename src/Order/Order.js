import Address from '../Address/Address';
import Customer from '../Customer/Customer';
import Card from '../Card/Card';

export function convertCartToOrder(order, cart) {
  return {
    ...order,
    items: [...cart.items]
  };
}

export function changeOrderBillingAddress(order, address) {
  return {
    ...order,
    billingAddress: {...address}
  };
}

export function changeOrderShippingAddress(order, address) {
  return {
    ...order,
    shippingAddress: {...address}
  };
}

export function changeOrderCustomer(order, customer) {
  return {
    ...order,
    customer: {...customer}
  };
}

export function changeOrderCard(order, card) {
  return {
    ...order,
    card: {...card}
  };
}

export default {
  id: null,
  user_id: null,
  order_number: null,
  status: null,
  currency: null,
  shippingAddress: {...Address},
  billinAddress: {...Address},
  customer: {...Customer},
  card: {...Card},
  items: [],
  subtotal: 0,
  fees: [],
  taxes: [],
  total: 0
};
