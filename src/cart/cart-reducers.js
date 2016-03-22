import * as actions from './cart-actions';
import * as itemsActions from '../items/items-actions';
import * as taxesActions from '../taxes/taxes-actions';
import {defaultCart} from './cart';
import items from '../items/items-reducers';
import taxes from '../taxes/taxes-reducers';
import {calculateOrderAmounts} from '../accounting/accounting';

function resetTaxes(state, taxes) {
  return calculateOrderAmounts({
    ...defaultCart,
    ...state,
    taxes: [...taxes]
  });
}

export default function (state = {}, action) {
  switch (action.type) {
  case itemsActions.ADD_CART_ITEM:
  case itemsActions.REMOVE_CART_ITEM:
  case itemsActions.CHANGE_CART_ITEM_QUANTITY:
  case itemsActions.RESET_CART_ITEMS:
    state = calculateOrderAmounts(items(state, action));
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case actions.EMPTY_CART:
    state = calculateOrderAmounts({ ...defaultCart });
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case taxesActions.ADD_TAX:
  case taxesActions.REMOVE_TAX:
  case taxesActions.RESET_TAXES:
    return resetTaxes(state, taxes(state.taxes, action));

  default:
    return state;
  }
}
