import * as actions from './cart-actions';
import * as itemsActions from '../items/items-actions';
import * as taxesActions from '../taxes/taxes-actions';
import {defaultCart} from './cart';
import items from '../items/items-reducers';
import taxesReducers from '../taxes/taxes-reducers';
import {calculateOrderAmounts} from '../accounting/accounting';
import * as cartMethods from './cart';

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
    break;

  case actions.EMPTY_CART:
    let taxes = [ ...state.taxes ];
    state = calculateOrderAmounts({ ...defaultCart });
    for (let i = 0, len = taxes.length; i < len; ++i) {
      state.taxes.push({ ...taxes[i] });
    }
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    break;

  case taxesActions.ADD_TAX:
  case taxesActions.REMOVE_TAX:
  case taxesActions.RESET_TAXES:
    state = resetTaxes(state, taxesReducers(state.taxes, action));
    break;
  }

  state.__proto__ = cartMethods;
  return state;
}
