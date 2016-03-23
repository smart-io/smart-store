/*import {store, dispatch} from '../app';
import * as Actions from './orders-actions';

class Orders {
  items = [];

  constructor(items) {
    if (items) {
      for (const key in items) {
        this.items[key] = items[key];
      }
    }
  }

  static initialize() {
    return new Orders(store.getState().orders);
  }

  static reset(state, data) {
    return [...data];
  }

  fetchAllOrders() {
    return dispatch(Actions.fetchAllOrders());
  }

  shipOrder(order) {
    return dispatch(Actions.shipOrder(order));
  }

  static updateOrder(state, order) {
    let index = null;
    for (let i = 0, len = state.length; i < len; ++i) {
      if (state[i].id === order.id) {
        index = i;
        break;
      }
    }

    if (index !== null) {
      state = [
        ...state.slice(0, index),
        { ...order },
        ...state.slice(index + 1)
      ];
    } else {
      state = [
        { ...order },
        ...state
      ];
    }

    return state;
  }
}

export default Orders;
*/
