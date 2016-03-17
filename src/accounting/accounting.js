export function calculateItemSubtotal(item) {
  return {
    ...item,
    subtotal: item.price * item.quantity
  };
}

export function calculateOrderAmounts(order) {
  let subtotal = 0;
  order.items.forEach((item) => {
    subtotal += item.subtotal;
  });
  return {
    ...order,
    subtotal: subtotal,
    total: subtotal
  };
}
