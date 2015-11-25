export function addItem(cart, item) {
  item = calculateSubtotem(item);
  return {...cart, items: [...cart.items, item]};
}

export function removeItem(cart, index) {
  return {
    ...cart,
    items: [
      ...cart.items.slice(0, index),
      ...cart.items.slice(index + 1)
    ]
  };
}

export function changeItemQuantity(cart, index, quantity) {
  let item = {...cart.items[index], quantity: quantity};
  item = calculateSubtotem(item);

  return {
    ...cart,
    items: [
      ...cart.items.slice(0, index),
      item,
      ...cart.items.slice(index + 1)
    ]
  };
}

export function calculateSubtotem(item) {
  return {
    ...item,
    subtotal: item.price * item.quantity
  };
}

export default {
  items: []
};

