import OrderValidator from './order-validator';
import {getConfig} from '../index';
import {dispatch, getState} from '../app';
import Request from '../request';

export const UPDATE_ORDER = 'UPDATE_ORDER';
export const CONVERT_CART_TO_ORDER = 'CONVERT_CART_TO_ORDER';
export const REQUEST_CREATE_ORDER = 'REQUEST_CREATE_ORDER';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
export const RECEIVE_ORDER_EXCEPTION = 'RECEIVE_ORDER_EXCEPTION';
export const VALIDATE_ORDER = 'VALIDATE_ORDER';
export const ORDER_VALIDATED = 'ORDER_VALIDATED';
export const ORDER_EXCEPTIONS = 'ORDER_EXCEPTIONS';
export const RESET_ORDER_TAXES = 'RESET_ORDER_TAXES';

export const updateOrder = data => dispatch({ type: UPDATE_ORDER, data });
export const convertCartToOrder = cart => dispatch({ type: CONVERT_CART_TO_ORDER, cart });
export const requestCreateOrder = () => dispatch({ type: REQUEST_CREATE_ORDER });
export const receiveOrder = data => dispatch({ type: RECEIVE_ORDER, data });
export const receiveOrderExcpetion = errors => dispatch({ type: RECEIVE_ORDER_EXCEPTION, errors });
export const orderExceptions = errors => dispatch({ type: ORDER_EXCEPTIONS, errors });
export const resetOrderTaxes = taxes => dispatch({ type: RESET_ORDER_TAXES, taxes });

const dispatchValidateOrder = () => dispatch({ type: VALIDATE_ORDER });
const orderValidated = () => dispatch({ type: ORDER_VALIDATED });

export const validateOrder = () => () => {
  dispatchValidateOrder();

  return new Promise((resolve, reject) => {
    if (OrderValidator.assert(getState().order)) {
      orderValidated();
      resolve();
    } else {
      const errors = OrderValidator.validate(getState().order);
      orderExceptions(errors);
      reject(errors);
    }
  });
};

export const placeOrder = () => () => {
  requestCreateOrder();

  return new Request({
    url: `${getConfig().url}/order`,
    method: 'POST',
    data: getState().order
  })
    .then(function (data) {
      receiveOrder(data);
      return Promise.resolve(data);
    })
    .catch(function (data) {
      receiveOrderExcpetion(data);
      return Promise.reject(data);
    });
};
