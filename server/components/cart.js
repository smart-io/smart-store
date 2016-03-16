import React, { PropTypes, Component } from 'react';
import { PlaygroundComponent, View, Section, Ui } from '../../playground/index';
import * as actions from '../../src/cart/cart-actions';
import Item from '../../src/order/items/item';

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

  showCartItemModal = () => {
    this.refs.modal.setState({ isOpen: true });
  };

  addCartItem = (value) => {
    this.refs.modal.setState({ isOpen: false });
    this.context.store.dispatch(actions.addCartItem({...new Item, ...value}));
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
    addCartItem: this.showCartItemModal,
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
        <Ui.Modal ref="modal">
          <Section.Form
            name="Item"
            defaults={new Item}
            action={this.addCartItem}
          />
        </Ui.Modal>
      </View>
    );
  }
}

export default Cart;

