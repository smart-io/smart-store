import * as orderActions from './order-actions';
import * as addressActions from './address/address-actions';
import * as itemsActions from '../items/items-actions';
import * as customerActions from './customer/customer-actions';
import * as cardActions from './card/card-actions';
import {defaultAddress} from './address/address';
import {defaultCustomer} from './customer/customer';
import {defaultCard} from './card/card';

export const update = order => orderActions.updateOrder(order);
export const validate = order => orderActions.validateOrder(order);
export const place = order => orderActions.placeOrder(order);
export const convertCart = cart => orderActions.convertCartToOrder(cart);
export const changeCurrency = currency => orderActions.changeCurrency(currency);
export const updateCustomer = customer => customerActions.updateOrderCustomer(customer);
export const updateBillingAddress = address => addressActions.updateOrderBillingAddress(address);
export const updateShippingAddress = address => addressActions.updateOrderShippingAddress(address);
export const updateCard = card => cardActions.updateOrderCard(card);
export const addItem = item => itemsActions.addOrderItem(item);
export const removeItem = index => itemsActions.removeOrderItem(index);
export const changeItemQuantity = (index, quantity) => itemsActions.changeOrderItemQuantity(index, quantity);

export const defaultOrder = {
  id: null,
  user_id: null,
  order_number: null,
  status: null,
  tracking_number: null,
  currency: 'USD',
  shipping_address: { ...defaultAddress },
  billing_address: { ...defaultAddress },
  customer: { ...defaultCustomer },
  card: { ...defaultCard },
  items: [],
  subtotal: 0,
  fees: [],
  taxes: [],
  total: 0
};
