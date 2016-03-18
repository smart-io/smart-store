import { dispatch } from '../app';

export const RESET_CART_ITEMS = 'RESET_CART_ITEMS';
export const RESET_ORDER_ITEMS = 'RESET_ORDER_ITEMS';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const REMOVE_ORDER_ITEM = 'REMOVE_ORDER_ITEM';
export const CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY';
export const CHANGE_ORDER_ITEM_QUANTITY = 'CHANGE_ORDER_ITEM_QUANTITY';

export const resetCartItem = () => dispatch({ type: RESET_CART_ITEMS });
export const resetOrderItem = () => dispatch({ type: RESET_CART_ITEMS });
export const addCartItem = item => dispatch({ type: ADD_CART_ITEM, item });
export const addOrderItem = item => dispatch({ type: ADD_ORDER_ITEM, item });
export const removeCartItem = index => dispatch({ type: REMOVE_CART_ITEM, index });
export const removeOrderItem = index => dispatch({ type: REMOVE_ORDER_ITEM, index });
export const changeCartItemQuantity = (index, quantity) => dispatch({ type: CHANGE_CART_ITEM_QUANTITY, index, quantity });
export const changeOrderItemQuantity = (index, quantity) => dispatch({ type: CHANGE_ORDER_ITEM_QUANTITY, index, quantity });
