import * as actions from './CartActions';
import { ActionTypes } from 'redux/lib/createStore';

function addItem(cart, item) {
  cart.items = [...cart.items, item];
}

function removeItem(cart, item) {
  for (let key in cart.items) {
    if (cart.items[key] === item) {
      delete cart.items[key];
    }
  }
}

function changeItemQuantity(item, quantity) {
  for (let key in this.items) {
    if (cart.items[key] === item) {
      cart.items[key].changeQuantity(quantity);
    }
  }
}

export default function cart(state = {}, action) {
  switch (action.type) {
  case actions.ADD_CART_ITEM:
    state.cart = addItem(state.cart, action.item);
    localStorage['cart'] = JSON.stringify(state.cart);
    return state;
  case actions.CHANGE_CART_ITEM_QUANTITY:
    state.cart = changeItemQuantity(state.cart, action.item, action.quantity);
    localStorage['cart'] = JSON.stringify(state.cart);
    return state;
  case actions.REMOVE_CART_ITEM:
    state.cart = removeItem(state.cart, action.item);
    localStorage['cart'] = JSON.stringify(state.cart);
    return state;
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
