import OrderValidator from './OrderValidator';
import Config from '../Config';
import Request from '../Request';

export const UPDATE_ORDER = 'UPDATE_ORDER';
export function updateOrder(data) {
  return {
    type: UPDATE_ORDER,
    data: data
  };
}

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

export const VALIDATE_ORDER = 'VALIDATE_ORDER';
export const ORDER_VALIDATED = 'ORDER_VALIDATED';
export const ORDER_EXCEPTIONS = 'ORDER_EXCEPTIONS';
export const REQUEST_CREATE_ORDER = 'REQUEST_CREATE_ORDER';
export const RECEIVE_CREATED_ORDER = 'RECEIVE_CREATED_ORDER';
const dispatchAction = (action) => { return { type: action }};

export function validateOrder(order) {
  return function(dispatch) {
    dispatch(dispatchAction(VALIDATE_ORDER));
    return new Promise(function(resolve, reject) {
      if (OrderValidator.assert(order)) {
        dispatch(dispatchAction(ORDER_VALIDATED));
        resolve();
      } else {
        dispatch(dispatchAction(ORDER_EXCEPTIONS));
        reject(OrderValidator.validate(order));
      }
    });
  }
}

export function placeOrder(order) {
  return function(dispatch) {
    dispatch(dispatchAction(REQUEST_CREATE_ORDER));

    return new Request({
      url: `${Config.url}/order`,
      method: 'POST',
      data: order
    })
      .then(function (data) {
        dispatch(receiveSession(data));
        return Promise.resolve(data);
      })
      .catch(function (data) {
        dispatch(receiveBadSession(data));
        return Promise.reject(data);
      });
  }
}
