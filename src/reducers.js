import { combineReducers } from 'redux';
import cart from './cart/cart-reducers';
import order from './order/order-reducers';
import orders from './orders/orders-reducers';

export default combineReducers({
  cart,
  order,
  orders
});
