import { store, dispatch } from '../app';
import Item from '../order/items/item';
import * as Actions from './cart-actions';

class Cart {
  /**
   * @type {Array.<Item>}
   */
  items = [];

  constructor(attributes) {
    if (attributes) {
      for (const key of Object.keys(attributes)) {
        this[key] = attributes[key];
      }
    }
  }

  static initialize() {
    return new Cart(store.getState().cart);
  }

  addItem(item) {
    return dispatch(Actions.addCartItem(item));
  }

  static addItem(cart, item) {
    item = { ...new Item, ...Cart.calculateSubtotal(item) };
    return { ...cart, items: [...cart.items, item] };
  }

  removeItem(index) {
    return dispatch(Actions.removeCartItem(index));
  }

  static removeItem(cart, index) {
    return {
      ...cart,
      items: [
        ...cart.items.slice(0, index),
        ...cart.items.slice(index + 1)
      ]
    };
  }

  changeItemQuantity(index, quantity) {
    return dispatch(Actions.changeCartItemQuantity(index, quantity));
  }

  static changeItemQuantity(cart, index, quantity) {
    let item = { ...new Item, ...cart.items[index], quantity: parseInt(quantity) };
    item = Cart.calculateSubtotal(item);

    return {
      ...cart,
      items: [
        ...cart.items.slice(0, index),
        item,
        ...cart.items.slice(index + 1)
      ]
    };
  }

  static calculateSubtotal(item) {
    return {
      ...item,
      subtotal: item.price * item.quantity
    };
  }
}

export default Cart;
