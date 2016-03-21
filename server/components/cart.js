import React, { PropTypes, Component } from 'react';
import { PlaygroundComponent, View, Section, Ui } from '../../playground/index';
import * as cart from '../../src/cart/cart';
import item from '../../src/items/item';

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
    cart.addItem({...item, ...value});
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
        <Section>
          <Section.Param name="Subtotal" value={this.state.cart.subtotal}/>
          <Section.Param name="Taxes" total={[this.state.cart.taxes, 'amount']}/>
          <Section.Param name="Total" value={this.state.cart.total}/>
        </Section>
        <Ui.Modal ref="modal">
          <Section.Form
            name="Item"
            defaults={{ ...item }}
            action={this.addCartItem}
          />
        </Ui.Modal>
      </View>
    );
  }
}

export default Cart;
