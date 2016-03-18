import * as actions from './items-actions';
import { calculateItemSubtotal } from '../accounting/accounting';
import item from '../items/item';

function addItem(state, data) {
  data = { ...data, ...calculateItemSubtotal(data) };
  let items = [ ...state.items ];
  let updateItem = false;
  for (var i = 0, len = items.length; i < len; ++i) {
    if (items[i].code === data.code) {
      items[i] = {
        ...items[i],
        ...data,
        quantity: (items[i].quantity + data.quantity)
      };
      items[i] = calculateItemSubtotal(items[i]);
      updateItem = true;
      break;
    }
  }
  if (!updateItem) items.push(data);
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
  let item = { ...item, ...state.items[index], quantity: parseInt(quantity) };
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

export default function(state = [], action) {
  switch (action.type) {
  case actions.RESET_CART_ITEMS:
  case actions.RESET_ORDER_ITEMS:
    return [];

  case actions.ADD_CART_ITEM:
  case actions.ADD_ORDER_ITEM:
    return addItem(state, action.data);

  case actions.REMOVE_CART_ITEM:
  case actions.REMOVE_ORDER_ITEM:
    return removeItem(state, action.index);
    break;

  case actions.CHANGE_CART_ITEM_QUANTITY:
  case actions.CHANGE_ORDER_ITEM_QUANTITY:
    return changeItemQuantity(state, action.index, action.quantity);
    break;

    break;
  default:
    return state;
  }
}
