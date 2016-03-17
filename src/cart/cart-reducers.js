import * as actions from './cart-actions';
import Cart from './cart';
import item from '../order/items/item';
import { calculateItemSubtotal } from '../accounting/accounting';

function addItem(cart, item) {
  item = { ...item, ...calculateItemSubtotal(item) };
  let items = [ ...cart.items ];
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
  return { ...cart, items: items };
}

function removeItem(cart, index) {
  return {
    ...cart,
    items: [
      ...cart.items.slice(0, index),
      ...cart.items.slice(index + 1)
    ]
  };
}

function changeItemQuantity(cart, index, quantity) {
  let item = { ...item, ...cart.items[index], quantity: parseInt(quantity) };
  item = calculateItemSubtotal(item);

  return {
    ...cart,
    items: [
      ...cart.items.slice(0, index),
      item,
      ...cart.items.slice(index + 1)
    ]
  };
}

export default function(state = {}, action) {
  switch (action.type) {
  case actions.ADD_CART_ITEM:
    state = addItem(state, action.item);
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case actions.CHANGE_CART_ITEM_QUANTITY:
    state = changeItemQuantity(state, action.index, action.quantity);
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case actions.REMOVE_CART_ITEM:
    state = removeItem(state, action.index);
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  case actions.EMPTY_CART:
    state = {...new Cart};
    if (typeof localStorage !== 'undefined') localStorage['cart'] = JSON.stringify(state);
    return state;

  default:
    return state;
  }
}
