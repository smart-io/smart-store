import * as Actions from './OrderActions';
import Order from './Order';

export default function order(state = {}, action) {
  switch (action.type) {
  case Actions.UPDATE_ORDER:
    state = Order.update(state, action.data);
    return state;

  case Actions.CONVERT_CART_TO_ORDER:
    state = Order.convertCartToOrder(state, action.cart);
    return state;

  case Actions.CHANGE_ORDER_BILLING_ADDRESS:
    state = Order.changeBillingAddress(state, action.address);
    return state;

  case Actions.CHANGE_ORDER_SHIPPING_ADDRESS:
    state = Order.changeShippingAddress(state, action.address);
    return state;

  case Actions.CHANGE_ORDER_CUSTOMER:
    state = Order.changeCustomer(state, action.customer);
    return state;

  case Actions.CHANGE_ORDER_CARD:
    state = Order.changeCard(state, action.card);
    return state;

  case Actions.RECEIVE_ORDER:
    state = Order.update(state, action.data);
    return state;

  default:
    return state;
  }
}
