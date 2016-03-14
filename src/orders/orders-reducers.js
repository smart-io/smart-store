import * as Actions from './orders-actions';
import Orders from './orders';

export default function order(state = {}, action) {
  switch (action.type) {
  case Actions.RECEIVE_ORDERS:
    state = Orders.reset(state, action.data);
    return state;

  case Actions.RECEIVE_SINGLE_ORDER:
    state = Orders.updateOrder(state, action.data);
    return state;

  default:
    return state;
  }
}
