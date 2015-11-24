import * as actions from './CartActions';
import { ActionTypes } from 'redux/lib/createStore';
import { addItem, changeItemQuantity, removeItem } from './Cart';

export default function cart(state = {}, action) {
  let cart;
  switch (action.type) {
  case actions.ADD_CART_ITEM:
    cart = addItem(state.cart, action.item);
    localStorage['cart'] = JSON.stringify(cart);
    return {...state, cart: cart};

  case actions.CHANGE_CART_ITEM_QUANTITY:
    cart = changeItemQuantity(state.cart, action.item, action.quantity);
    localStorage['cart'] = JSON.stringify(cart);
    return {...state, cart: cart};

  case actions.REMOVE_CART_ITEM:
    cart = removeItem(state.cart, action.item);
    localStorage['cart'] = JSON.stringify(cart);
    return {...state, cart: cart};

  case ActionTypes.INIT:
    try {
      state = {...state, cart: {...JSON.parse(localStorage['cart'])}};
    } catch (err) {
      state = {...state, cart: {items: []}};
    }
    localStorage['cart'] = JSON.stringify(state.cart);
    return state;

  default:
    return state;
  }
}
