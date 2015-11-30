import { store } from '../App';
//import * as Actions from './OrdersActions';

class Orders {
  /**
   * @type {Array.<Order>}
   */
  items = [];

  constructor(items) {
    if (items) {
      for (const key of items) {
        this.items[key] = items[key];
      }
    }
  }

  static initialize() {
    return new Orders(store.getState().orders);
  }

  static reset(/*state, data*/) {
  }
}

export default Orders;