import { PropTypes } from 'react';
import StateComponent from '../StateComponent';
import { dispatch } from '../../src/App';
import * as actions from '../../src/Cart/CartActions';

class Cart extends StateComponent {
  static contextTypes = {
    store: PropTypes.object
  };

  static types = actions;

  static actions = {
    addCartItem: actions.addCartItem,
    changeCartItemQuantity: actions.changeCartItemQuantity,
    removeCartItem: actions.removeCartItem
  };

  constructor(...args) {
    super(...args);
  }

  callbacks = {
    addCartItem: () => {
      console.log(this.context.store);
/*
      const id = Math.round(Math.random() * 100);
      dispatch(actions.addCartItem({
        id: id,
        name: `Item ${id}`
      }));
*/
    }
  };
}

export default Cart;
