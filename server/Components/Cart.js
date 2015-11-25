import React, { PropTypes, Component } from 'react';
import { PlaygroundComponent, View, Section } from '../../playground/index';
import { Cart as actions } from '../../src/index';
import Item from '../../src/Item/Item';

@PlaygroundComponent
class Cart extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static subscribe = 'cart';

  constructor(...args) {
    super(...args);
    this.state = {
      state: {items: []}
    };
  }

  addCartItem = () => {
    const id = Math.round(Math.random() * 100);
    this.context.store.dispatch(actions.addCartItem({
      ...Item,
      id: id,
      name: `Item ${id}`,
      price: 300.00
    }));
  };

  removeCartItem = (index) => {
    if (index === undefined) {
      index = prompt('Cart item index');
    }
    this.context.store.dispatch(actions.removeCartItem(index));
  };

  changeCartItemQuantity = (index) => {
    const quantity = prompt('New quantity');
    this.context.store.dispatch(actions.changeCartItemQuantity(index, quantity));
  };

  emptyCart = () => {
    this.context.store.dispatch(actions.emptyCart());
  };

  actions = {
    addCartItem: this.addCartItem,
    emptyCart: this.emptyCart
  };

  render() {
    return (
      <View>
        <Section.Items
          showTotals={['quantity', 'price', 'subtotal']}
          items={this.state.state.items}
          removeCartItem={this.removeCartItem}
          changeCartItemQuantity={this.changeCartItemQuantity}
        />
      </View>
    );
  }
}

export default Cart;

