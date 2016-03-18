import * as actions from './cart-actions';
import * as itemsActions from '../items/items-actions';
import cart from './cart';
import items from '../items/items-reducers';

export default function(state = {}, action) {
  switch (action.type) {
  case itemsActions.ADD_CART_ITEM:
  case itemsActions.REMOVE_CART_ITEM:
  case itemsActions.CHANGE_CART_ITEM_QUANTITY:
  case itemsActions.RESET_CART_ITEMS:
    state = items(state, action);
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case actions.EMPTY_CART:
    state = { ...cart };
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  default:
    return state;
  }
}
