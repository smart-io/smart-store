import { store } from '../App';

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

  static reset(state, data) {
    return [...data];
  }
}

export default Orders;
