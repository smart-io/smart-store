export function calculateItemSubtotal(item) {
  return {
    ...item,
    subtotal: item.price * item.quantity
  };
}

export function calculateOrderAmounts(order) {
  let subtotal = 0;
  order.items.forEach(item => Math.round(subtotal += item.subtotal));

  let total = subtotal;
  let taxes = [];
  order.taxes.forEach(tax => {
    let newTax = 0;
    if (tax.compound === true) {
      newTax = Math.round(total * parseFloat(tax.rate));
    } else {
      newTax = Math.round(subtotal * parseFloat(tax.rate));
    }
    total += newTax;
    taxes.push({ ...tax, amount: newTax });
  });

  return {
    ...order,
    subtotal: subtotal,
    total: total,
    taxes: taxes
  };
}
