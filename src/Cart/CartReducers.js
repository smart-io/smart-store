import * as Actions from './CartActions';
import DefaultCart, * as Cart from './Cart';

export default function cart(state = {}, action) {
  switch (action.type) {
  case Actions.ADD_CART_ITEM:
    state = Cart.addItem(state, action.item);
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case Actions.CHANGE_CART_ITEM_QUANTITY:
    state = Cart.changeItemQuantity(state, action.item, action.quantity);
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case Actions.REMOVE_CART_ITEM:
    state = Cart.removeItem(state, action.item);
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case Actions.EMPTY_CART:
    state = {...DefaultCart};
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  default:
    return state;
  }
}
