import * as Actions from './order-actions';
import Order from './order';

export default function order(state = {}, action) {
  switch (action.type) {
  case Actions.UPDATE_ORDER:
    return { ...state, ...action.data };

  case Actions.CONVERT_CART_TO_ORDER:
    state = Order.convertCartToOrder(state, action.cart);
    return state;

  case Actions.RECEIVE_ORDER:
    state = Order.update(state, action.data);
    return state;

  default:
    return state;
  }
}
