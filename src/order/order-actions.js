import OrderValidator from './order-validator';
import { promiseDispatch, dispatch, conclude } from '../app';
import Request from '../request';

export const UPDATE_ORDER = 'UPDATE_ORDER';
export const CHANGE_ORDER_CURRENCY = 'CHANGE_ORDER_CURRENCY';
export const CONVERT_CART_TO_ORDER = 'CONVERT_CART_TO_ORDER';
export const REQUEST_CREATE_ORDER = 'REQUEST_CREATE_ORDER';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
export const RECEIVE_ORDER_EXCEPTION = 'RECEIVE_ORDER_EXCEPTION';
export const VALIDATE_ORDER = 'VALIDATE_ORDER';
export const ORDER_VALIDATED = 'ORDER_VALIDATED';
export const ORDER_EXCEPTIONS = 'ORDER_EXCEPTIONS';
export const RESET_ORDER_TAXES = 'RESET_ORDER_TAXES';
export const RESET_ORDER = 'RESET_ORDER';

export const updateOrder = order => promiseDispatch({ type: UPDATE_ORDER, order: conclude({ order }) });
export const changeCurrency = currency => promiseDispatch({ type: CHANGE_ORDER_CURRENCY, currency });
export const convertCartToOrder = cart => promiseDispatch({ type: CONVERT_CART_TO_ORDER, cart });
export const requestCreateOrder = () => promiseDispatch({ type: REQUEST_CREATE_ORDER });
export const receiveOrder = order => promiseDispatch({ type: RECEIVE_ORDER, order });
export const receiveOrderExcpetion = errors => promiseDispatch({ type: RECEIVE_ORDER_EXCEPTION, errors });
export const orderExceptions = errors => promiseDispatch({ type: ORDER_EXCEPTIONS, errors });
export const resetOrderTaxes = taxes => promiseDispatch({ type: RESET_ORDER_TAXES, taxes });
export const resetOrder = () => promiseDispatch({ type: RESET_ORDER });

const dispatchValidateOrder = () => dispatch({ type: VALIDATE_ORDER });
const orderValidated = () => dispatch({ type: ORDER_VALIDATED });

export const validateOrder = order => {
  dispatchValidateOrder();
  order = conclude({ order });

  return new Promise((resolve, reject) => {
    if (OrderValidator.assert(order)) {
      orderValidated();
      resolve();
    } else {
      const errors = OrderValidator.validate(order);
      orderExceptions(errors);
      reject(errors);
    }
  });
};

export const placeOrder = order => {
  requestCreateOrder();
  order = conclude({ order });

  return new Request({
    url: '/order',
    method: 'POST',
    data: order
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
