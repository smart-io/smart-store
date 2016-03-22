import Store from '../index';
import Request from '../request';

export const REQUEST_FETCH_ORDERS = 'REQUEST_FETCH_ORDERS';
export const REQUEST_FETCH_ALL_ORDERS = 'REQUEST_FETCH_ALL_ORDERS';
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_FETCH_ORDERS_EXCEPTIONS = 'RECEIVE_FETCH_ORDERS_EXCEPTIONS';
export const SHIP_ORDER = 'SHIP_ORDER';
export const SHIP_ORDER_EXCEPTION = 'SHIP_ORDER_EXCEPTION';
export const RECEIVE_SINGLE_ORDER = 'RECEIVE_SINGLE_ORDER';

export function requestFetchOrders() {
  return { type: REQUEST_FETCH_ORDERS };
}

export function requestFetchAllOrders() {
  return { type: REQUEST_FETCH_ALL_ORDERS };
}

export function receiveOrders(data) {
  return { type: RECEIVE_ORDERS, data: data };
}

export function receiveFetchOrdersExcpetion(errors) {
  return { type: RECEIVE_FETCH_ORDERS_EXCEPTIONS, errors: errors };
}

export function dispatchShipOrder(order) {
  return { type: SHIP_ORDER, order: order };
}

export function shipOrderException(order, errors) {
  return { type: SHIP_ORDER_EXCEPTION, order: order, errors: errors };
}

export function receiveSingleOrder(data) {
  return { type: RECEIVE_SINGLE_ORDER, data: data };
}

export function fetchOrders() {
  return function (dispatch) {
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

export function fetchAllOrders() {
  return function (dispatch) {
    dispatch(requestFetchAllOrders());

    return new Request({
      url: `${Store.url}/orders/all`,
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

export function shipOrder(order) {
  return function (dispatch) {
    dispatch(dispatchShipOrder(order));

    return new Request({
      url: `${Store.url}/order/${order.id}/ship`,
      method: 'PUT',
      data: order
    })
      .then(function (data) {
        dispatch(receiveSingleOrder(data));
        return Promise.resolve(data);
      })
      .catch(function (data) {
        dispatch(shipOrderException(order, data));
        return Promise.reject(data);
      });
  }
}
