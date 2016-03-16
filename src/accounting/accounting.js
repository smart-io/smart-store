export function calculateItemSubtotal(item) {
  return {
    ...item,
    subtotal: item.price * item.quantity
  };
}
