import Store from '../index';
import Request from '../Request';

export const REQUEST_FETCH_ORDERS = 'REQUEST_FETCH_ORDERS';
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_FETCH_ORDERS_EXCEPTIONS = 'RECEIVE_FETCH_ORDERS_EXCEPTIONS';

export function requestFetchOrders() {
  return { type: REQUEST_FETCH_ORDERS };
}

export function receiveOrders(data) {
  return { type: RECEIVE_ORDERS, data: data };
}

export function receiveFetchOrdersExcpetion(errors) {
  return { type: RECEIVE_FETCH_ORDERS_EXCEPTIONS, errors: errors };
}

export function fetchOrders() {
  return function(dispatch) {
    dispatch(requestFetchOrders());

    return new Request({
      url: `${Store.url}/orders`,
      method: 'GET'
    })
      .then(function (data) {
        dispatch(receiveOrders(data));
        return Promise.resolve(data);
      })
      .catch(function (data) {
        dispatch(receiveFetchOrdersExcpetion(data));
        return Promise.reject(data);
      });
  }
}
