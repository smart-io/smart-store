export function addItem(cart, item) {
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
  return {
    ...cart,
    items: [
      ...cart.items.slice(0, index),
      {...cart.items[index], quantity: quantity},
      ...cart.items.slice(index + 1)
    ]
  };
}
