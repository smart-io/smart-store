export const CONVERT_CART_TO_ORDER = 'CONVERT_CART_TO_ORDER';
export function convertCartToOrder(cart) {
  return {
    type: CONVERT_CART_TO_ORDER,
    cart: cart
  };
}

export const CHANGE_ORDER_BILLING_ADDRESS = 'CHANGE_ORDER_BILLING_ADDRESS';
export function changeOrderBillingAddress(address) {
  return {
    type: CHANGE_ORDER_BILLING_ADDRESS,
    address: address
  };
}

export const CHANGE_ORDER_SHIPPING_ADDRESS = 'CHANGE_ORDER_SHIPPING_ADDRESS';
export function changeOrderShippingAddress(address) {
  return {
    type: CHANGE_ORDER_SHIPPING_ADDRESS,
    address: address
  };
}

export const CHANGE_ORDER_CUSTOMER = 'CHANGE_ORDER_CUSTOMER';
export function changeOrderCustomer(customer) {
  return {
    type: CHANGE_ORDER_CUSTOMER,
    customer: customer
  };
}

export const CHANGE_ORDER_CARD = 'CHANGE_ORDER_CARD';
export function changeOrderCard(card) {
  return {
    type: CHANGE_ORDER_CARD,
    card: card
  };
}
