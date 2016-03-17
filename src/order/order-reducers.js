import * as actions from './order-actions';
import defaultOrder from './order';
import address from './address/address-reducers';
import card from './card/card-reducers';
import customer from './card/card-reducers';
import { calculateOrderAmounts } from '../accounting/accounting';

function convertCartToOrder(order, cart) {
  return calculateOrderAmounts({
    ...defaultOrder,
    ...order,
    items: [...cart.items]
  });
}

export default function order(state = {}, action) {
  state = address(state, action);
  state = card(state, action);
  state = customer(state, action);

  switch (action.type) {
  case actions.RECEIVE_ORDER:
  case actions.UPDATE_ORDER:
    return { ...defaultOrder, ...state, ...action.data };

  case actions.CONVERT_CART_TO_ORDER:
    state = convertCartToOrder(state, action.cart);
    return state;

  default:
    return state;
  }
}
