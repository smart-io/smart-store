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
  console.log(order, address);
  return order;
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
