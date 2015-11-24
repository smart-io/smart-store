import Item from '../Item/Item';

export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export function addCartItem(item: Item) {
  return {
    type: ADD_CART_ITEM,
    item: item
  };
}

export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export function removeCartItem(item: Item) {
  return {
    type: REMOVE_CART_ITEM,
    item: item
  };
}

export const CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY';
export function changeCartItemQuantity(item: Item, quantity: Number) {
  return {
    type: CHANGE_CART_ITEM_QUANTITY,
    item: item,
    quantity: quantity
  };
}
