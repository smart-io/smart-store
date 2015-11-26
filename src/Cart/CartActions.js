export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY';
export const EMPTY_CART = 'EMPTY_CART';

export function addCartItem(item) {
  return {
    type: ADD_CART_ITEM,
    item: item
  };
}

export function removeCartItem(index) {
  return {
    type: REMOVE_CART_ITEM,
    index: index
  };
}

export function changeCartItemQuantity(index, quantity) {
  return {
    type: CHANGE_CART_ITEM_QUANTITY,
    index: index,
    quantity: quantity
  };
}

export function emptyCart() {
  return {
    type: EMPTY_CART
  };
}
