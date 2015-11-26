import * as Actions from './OrderActions';
import * as Order from './Order';

export default function order(state = {}, action) {
  switch (action.type) {
  case Actions.UPDATE_ORDER:
    state = Order.updateOrder(state, action.data);
    return state;

  case Actions.CONVERT_CART_TO_ORDER:
    state = Order.convertCartToOrder(state, action.cart);
    return state;

  case Actions.CHANGE_ORDER_BILLING_ADDRESS:
    state = Order.changeOrderBillingAddress(state, action.address);
    return state;

  case Actions.CHANGE_ORDER_SHIPPING_ADDRESS:
    state = Order.changeOrderShippingAddress(state, action.address);
    return state;

  case Actions.CHANGE_ORDER_CUSTOMER:
    state = Order.changeOrderCustomer(state, action.customer);
    return state;

  case Actions.CHANGE_ORDER_CARD:
    state = Order.changeOrderCard(state, action.card);
    return state;

  case Actions.RECEIVE_CREATED_ORDER:
    state = Order.updateOrder(state, action.data);
    return state;

  default:
    return state;
  }
}
