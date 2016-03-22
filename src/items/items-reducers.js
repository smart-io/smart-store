import * as actions from './items-actions';
import {defaultItem} from './item';
import {calculateItemSubtotal} from '../accounting/accounting';

function addItem(state, item) {
  item = { ...defaultItem, ...calculateItemSubtotal(item) };
  let items = [...state.items];
  let updateItem = false;
  for (var i = 0, len = items.length; i < len; ++i) {
    if (items[i].code === item.code) {
      items[i] = {
        ...items[i],
        ...item,
        quantity: (items[i].quantity + item.quantity)
      };
      items[i] = calculateItemSubtotal(items[i]);
      updateItem = true;
      break;
    }
  }
  if (!updateItem) items.push(item);
  return { ...state, items: items };
}

function removeItem(state, index) {
  return {
    ...state,
    items: [
      ...state.items.slice(0, index),
      ...state.items.slice(index + 1)
    ]
  };
}

function changeItemQuantity(state, index, quantity) {
  let item = { ...defaultItem, ...state.items[index], quantity: parseInt(quantity) };
  item = calculateItemSubtotal(item);

  return {
    ...state,
    items: [
      ...state.items.slice(0, index),
      item,
      ...state.items.slice(index + 1)
    ]
  };
}

export default function (state = [], action) {
  switch (action.type) {
  case actions.RESET_CART_ITEMS:
  case actions.RESET_ORDER_ITEMS:
    return [];

  case actions.ADD_CART_ITEM:
  case actions.ADD_ORDER_ITEM:
    return addItem(state, action.item);

  case actions.REMOVE_CART_ITEM:
  case actions.REMOVE_ORDER_ITEM:
    return removeItem(state, action.index);

  case actions.CHANGE_CART_ITEM_QUANTITY:
  case actions.CHANGE_ORDER_ITEM_QUANTITY:
    return changeItemQuantity(state, action.index, action.quantity);

  default:
    return state;
  }
}
