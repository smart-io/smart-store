import reduxStore, {initialSate, setStore, getState} from './app';
import reducers from './reducers';
import * as orderMethods from './order/order';
import * as cartMethods from './cart/cart';
import * as taxesMethods from './taxes/taxes';

export function storeEnhancer() {
  return next => (reducer, storeInitialState, enhancer) => {
    function nextReducer() {
      return function (state = {}, action) {
        const { cart, order, taxes, ...storeState } = state;
        state = reducer(storeState, action);
        state = {
          ...state,
          ...reducers({ cart, order, taxes }, action)
        };
        return state;
      };
    }

    let store = next(nextReducer(), { ...initialSate, ...storeInitialState }, enhancer);
    let nextStore = {
      ...store,
      dispatch(...args) {
        store.dispatch(...args);
        return args[0];
      },
      getState() {
        return { ...reduxStore.getState(), ...store.getState() };
      }
    };

    setStore(nextStore);
    return nextStore;
  };
}

export {config} from './config';
export {getConfig} from './config';

class Store {
  get order() {
    let order = getState().order;
    order.__proto__ = orderMethods;
    return order;
  }

  get cart() {
    let cart = getState().cart;
    cart.__proto__ = cartMethods;
    return cart;
  }

  get taxes() {
    let taxes = getState().taxes;
    taxes.__proto__ = taxesMethods;
    return taxes;
  }
}

export default new Store();
