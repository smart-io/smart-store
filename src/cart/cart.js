import * as actions from './cart-actions';
import * as itemsActions from '../items/items-actions';

export const addItem = item => itemsActions.addCartItem(item);
export const emptyCart = () => actions.emptyCart();
export const removeItem = index => itemsActions.removeCartItem(index);
export const changeItemQuantity = (index, quantity) => itemsActions.changeCartItemQuantity(index, quantity);

export default {
  items: [],
  taxes: []
}
