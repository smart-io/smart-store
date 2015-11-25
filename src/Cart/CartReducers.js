import * as actions from './CartActions';
import { addItem, changeItemQuantity, removeItem } from './Cart';

export default function cart(cart = {}, action) {
  switch (action.type) {
  case actions.ADD_CART_ITEM:
    cart = addItem(cart, action.item);
    localStorage['cart'] = JSON.stringify(cart);
    return cart;

  case actions.CHANGE_CART_ITEM_QUANTITY:
    cart = changeItemQuantity(cart, action.item, action.quantity);
    localStorage['cart'] = JSON.stringify(cart);
    return cart;

  case actions.REMOVE_CART_ITEM:
    cart = removeItem(cart, action.item);
    localStorage['cart'] = JSON.stringify(cart);
    return cart;

  default:
    return cart;
  }
}
