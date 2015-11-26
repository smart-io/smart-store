import * as Actions from './CartActions';
import Cart from './Cart';

export default function cart(state = {}, action) {
  switch (action.type) {
  case Actions.ADD_CART_ITEM:
    state = Cart.addItem(state, action.item);
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case Actions.CHANGE_CART_ITEM_QUANTITY:
    state = Cart.changeItemQuantity(state, action.index, action.quantity);
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case Actions.REMOVE_CART_ITEM:
    state = Cart.removeItem(state, action.index);
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case Actions.EMPTY_CART:
    state = {...new Cart};
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  default:
    return state;
  }
}
