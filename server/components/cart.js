import React, { PropTypes, Component } from 'react';
import { PlaygroundComponent, View, Section, Ui } from '../../playground/index';
import * as cart from '../../src/cart/cart';
import Item from '../../src/order/items/item';

@PlaygroundComponent
class Cart extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static subscribe = 'cart';

  showCartItemModal = () => {
    this.refs.modal.setState({ isOpen: true });
  };

  addCartItem = (value) => {
    this.refs.modal.setState({ isOpen: false });
    cart.addItem({...new Item, ...value});
  };

  removeCartItem = (index) => {
    if (index === undefined) {
      index = prompt('Cart item index');
    }
    cart.removeItem(index);
  };

  changeCartItemQuantity = (index) => {
    const quantity = prompt('New quantity');
    cart.changeItemQuantity(index, quantity);
  };

  actions = {
    addCartItem: this.showCartItemModal,
    emptyCart: cart.emptyCart
  };

  render() {
    return (
      <View>
        <Section.Items
          showTotals={['quantity', 'price', 'subtotal']}
          items={this.state.cart.items}
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
