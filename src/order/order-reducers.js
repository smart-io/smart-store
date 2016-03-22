import * as actions from './order-actions';
import * as taxesActions from '../taxes/taxes-actions';
import * as itemsActions from '../items/items-actions';
import {defaultOrder} from './order';
import address from './address/address-reducers';
import card from './card/card-reducers';
import customer from './customer/customer-reducers';
import items from '../items/items-reducers';
import taxes from '../taxes/taxes-reducers';
import {calculateOrderAmounts} from '../accounting/accounting';

function convertCartToOrder(order, cart) {
  return calculateOrderAmounts({
    ...defaultOrder,
    ...order,
    items: [...cart.items]
  });
}

function resetTaxes(state, taxes) {
  return calculateOrderAmounts({
    ...defaultOrder,
    ...state,
    taxes: [...taxes]
  });
}

export default function order(state = {}, action) {
  state = address(state, action);
  state = card(state, action);
  state = customer(state, action);

  switch (action.type) {
  case itemsActions.ADD_ORDER_ITEM:
  case itemsActions.CHANGE_ORDER_ITEM_QUANTITY:
  case itemsActions.REMOVE_ORDER_ITEM:
  case itemsActions.RESET_ORDER_ITEMS:
    return calculateOrderAmounts(items(state, action));

  case actions.RECEIVE_ORDER:
  case actions.UPDATE_ORDER:
    return { ...defaultOrder, ...state, ...action.order };

  case actions.CONVERT_CART_TO_ORDER:
    state = convertCartToOrder(state, action.cart);
    return state;

  case actions.CHANGE_ORDER_CURRENCY:
    return { ...defaultOrder, ...state, currency: action.currency };

  case taxesActions.ADD_TAX:
  case taxesActions.REMOVE_TAX:
  case taxesActions.RESET_TAXES:
    return resetTaxes(state, taxes(state.taxes, action));

  default:
    return state;
  }
}
