import OrderValidator from './OrderValidator';
import Config from '../Config';
import Request from '../Request';

export const UPDATE_ORDER = 'UPDATE_ORDER';
export const CONVERT_CART_TO_ORDER = 'CONVERT_CART_TO_ORDER';
export const CHANGE_ORDER_BILLING_ADDRESS = 'CHANGE_ORDER_BILLING_ADDRESS';
export const CHANGE_ORDER_SHIPPING_ADDRESS = 'CHANGE_ORDER_SHIPPING_ADDRESS';
export const CHANGE_ORDER_CUSTOMER = 'CHANGE_ORDER_CUSTOMER';
export const CHANGE_ORDER_CARD = 'CHANGE_ORDER_CARD';
export const REQUEST_CREATE_ORDER = 'REQUEST_CREATE_ORDER';
export const RECEIVE_CREATED_ORDER = 'RECEIVE_CREATED_ORDER';
export const RECEIVE_ORDER_EXCEPTIONS = 'RECEIVE_ORDER_EXCEPTIONS';
export const VALIDATE_ORDER = 'VALIDATE_ORDER';
export const ORDER_VALIDATED = 'ORDER_VALIDATED';
export const ORDER_EXCEPTIONS = 'ORDER_EXCEPTIONS';

export function updateOrder(data) {
  return {
    type: UPDATE_ORDER,
    data: data
  };
}

export function convertCartToOrder(cart) {
  return {
    type: CONVERT_CART_TO_ORDER,
    cart: cart
  };
}

export function changeOrderBillingAddress(address) {
  return {
    type: CHANGE_ORDER_BILLING_ADDRESS,
    address: address
  };
}

export function changeOrderShippingAddress(address) {
  return {
    type: CHANGE_ORDER_SHIPPING_ADDRESS,
    address: address
  };
}

export function changeOrderCustomer(customer) {
  return {
    type: CHANGE_ORDER_CUSTOMER,
    customer: customer
  };
}

export function changeOrderCard(card) {
  return {
    type: CHANGE_ORDER_CARD,
    card: card
  };
}

export function requestCreateOrder() {
  return {
    type: REQUEST_CREATE_ORDER
  };
}

export function receiveCreatedOrder(data) {
  return {
    type: RECEIVE_CREATED_ORDER,
    data: data
  };
}

export function receiveOrderExcpetion(errors) {
  return {
    type: RECEIVE_ORDER_EXCEPTIONS,
    errors: errors
  };
}

function dispatchValidateOrder() {
  return {
    type: VALIDATE_ORDER
  };
}

function orderValidated() {
  return {
    type: ORDER_VALIDATED
  };
}

export function orderExcpetions(errors) {
  return {
    type: ORDER_EXCEPTIONS,
    errors: errors
  };
}

export function validateOrder() {
  return function(dispatch, getState) {
    dispatch(dispatchValidateOrder());

    return new Promise(function(resolve, reject) {
      if (OrderValidator.assert(getState().order)) {
        dispatch(orderValidated());
        resolve();
      } else {
        const errors = OrderValidator.validate(getState().order);
        dispatch(orderExcpetions(errors));
        reject(errors);
      }
    });
  }
}

export function placeOrder() {
  return function(dispatch, getState) {
    dispatch(requestCreateOrder());

    return new Request({
      url: `${Config.url}/order`,
      method: 'POST',
      data: getState().order
    })
      .then(function (data) {
        dispatch(receiveCreatedOrder(data));
        return Promise.resolve(data);
      })
      .catch(function (data) {
        dispatch(receiveOrderExcpetion(data));
        return Promise.reject(data);
      });
  }
}
