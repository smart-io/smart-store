import StateComponent from '../StateComponent';
import * as actions from '../../src/Cart/CartActions';

class Cart extends StateComponent {
  static types = actions;

  static actions = {
    addCartItem: actions.addCartItem,
    changeCartItemQuantity: actions.changeCartItemQuantity,
    removeCartItem: actions.removeCartItem
  };
}

export default Cart;
