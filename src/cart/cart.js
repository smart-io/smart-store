import store, { dispatch } from '../app';
import Item from '../order/items/item';
import * as actions from './cart-actions';

export function addItem(item) {
  return dispatch(actions.addCartItem(item));
}

export function emptyCart() {
  return dispatch(actions.emptyCart());
}

export function removeItem(index) {
  return dispatch(actions.removeCartItem(index));
}

export function changeItemQuantity(index, quantity) {
  return dispatch(actions.changeCartItemQuantity(index, quantity));
}

export default {
  items: []
}
