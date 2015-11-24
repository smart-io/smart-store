import React, { PropTypes, Component } from 'react';
import Item from '../../playground/Item';
import { dispatch } from '../../src/App';
import * as actions from '../../src/Cart/CartActions';

@Item
class Cart extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static subscribe = 'cart';

  constructor(...args) {
    super(...args);
  }

  addCartItem = () => {
    alert('hi');
    console.log(this.context.store);
    /*
     const id = Math.round(Math.random() * 100);
     dispatch(actions.addCartItem({
     id: id,
     name: `Item ${id}`
     }));
     */
  };

  actions = {
    addCartItem: this.addCartItem,
    changeCartItemQuantity: actions.changeCartItemQuantity,
    removeCartItem: actions.removeCartItem
  };

  render() {
    console.log(this.state);
    return (
      <div>Hello</div>
    );
  }
}

export default Cart;

