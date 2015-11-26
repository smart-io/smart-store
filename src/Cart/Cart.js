import Item from '../Item/Item';

class Cart {
  /**
   * @type {Array.<Item>}
   */
  items = [];

  static addItem(cart, item) {
    item = { ...new Item, ...Cart.calculateSubtotal(item) };
    return { ...cart, items: [...cart.items, item] };
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
