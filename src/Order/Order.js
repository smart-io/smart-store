import Address from '../Address/Address';
import Customer from '../Customer/Customer';
import Card from '../Card/Card';

const defaults = {
  id: null,
  user_id: null,
  order_number: null,
  status: null,
  currency: 'USD',
  shippingAddress: {...Address},
  billingAddress: {...Address},
  customer: {...Customer},
  card: {...Card},
  items: [],
  subtotal: 0,
  fees: [],
  taxes: [],
  total: 0
};

function calculateAmounts(order) {
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

export function updateOrder(order, data) {
  return {
    ...defaults,
    ...order,
    ...data
  };
}

export function convertCartToOrder(order, cart) {
  return calculateAmounts({
    ...defaults,
    ...order,
    items: [...cart.items]
  });
}

export function changeOrderBillingAddress(order, address) {
  return {
    ...defaults,
    ...order,
    billingAddress: {...Address, ...address}
  };
}

export function changeOrderShippingAddress(order, address) {
  return {
    ...defaults,
    ...order,
    shippingAddress: {...Address, ...address}
  };
}

export function changeOrderCustomer(order, customer) {
  return {
    ...defaults,
    ...order,
    customer: {...customer}
  };
}

export function changeOrderCard(order, card) {
  return {
    ...defaults,
    ...order,
    card: {...card}
  };
}

export default defaults;
