import Config from './Config';
import { reducers, store, dispatch, initialState } from './App';
import * as Cart from './Cart/CartActions';
import * as Order from './Order/OrderActions';

export default class {
  static Cart = Cart;
  static Order = Order;
  static Config = Config;
  static reducers = reducers;
  static store = store;
  static dispatch = dispatch;
  static initialState = initialState;

  static cart = class {
    addItem = (item) => { return dispatch(Cart.addCartItem(item)); };
    changeItemQuantity = (item, quantity) => { return dispatch(Cart.changeCartItemQuantity(item, quantity)); };
    removeItem = (index) => { return dispatch(Cart.removeCartItem(index)); };
    empty = (index) => { return dispatch(Cart.emptyCart(index)); };
  };

  static order = class {
    update = (data) => { return dispatch(Order.updateOrder(data)); };
    convertCart = (cart) => { return dispatch(Order.convertCartToOrder(cart)); };
    changeBillingAddress = (address) => { return dispatch(Order.changeOrderBillingAddress(address)); };
    changeShippingAddress = (address) => { return dispatch(Order.changeOrderShippingAddress(address)); };
    changeCustomer = (customer) => { return dispatch(Order.changeOrderCustomer(customer)); };
    changeCard = (card) => { return dispatch(Order.changeOrderCard(card)); };
    validate = () => { return dispatch(Order.validateOrder()); };
    place = () => { return dispatch(Order.placeOrder()); };
  };
};
