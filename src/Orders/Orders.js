import { store, dispatch } from '../App';
import * as Actions from './OrdersActions';

class Orders {
  /**
   * @type {Array.<Order>}
   */
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
}

export default Orders;
