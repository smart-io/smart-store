import * as Actions from './OrderActions';
import * as Order from './Order';

export default function order(state = {}, action) {
  switch (action.type) {
  case Actions.CONVERT_CART_TO_ORDER:
    state = Order.convertCartToOrder(state, action.cart);
    return state;

  case Actions.CHANGE_ORDER_BILLING_ADDRESS:
    state = Order.changeOrderBillingAddress(state, action.address);
    return state;

  case Actions.CHANGE_ORDER_SHIPPING_ADDRESS:
    state = Order.changeOrderBillingAddress(state, action.address);
    return state;

  case Actions.CHANGE_ORDER_CUSTOMER:
    state = Order.changeOrderBillingAddress(state, action.address);
    return state;

  default:
    return state;
  }
}
