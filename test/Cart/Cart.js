import { expect } from 'chai';
import { store, dispatch } from '../../src/App';
import Item from '../../src/Item/Item';
import * as actions from '../../src/Cart/CartActions';

describe('Cart', () => {
  it('add item to cart', () => {
    dispatch(actions.addCartItem({...Item}));
    expect(store.getState()['cart'].items.length).to.equal(1);
  });

  it('remove item from cart', () => {
    expect(store.getState()['cart'].items.length).to.equal(1);
    dispatch(actions.removeCartItem(0));
    expect(store.getState()['cart'].items.length).to.equal(0);
  });

  it('change cart item quantity', () => {
    dispatch(actions.addCartItem({...Item}));
    dispatch(actions.changeCartItemQuantity(0, 5));
    expect(store.getState()['cart'].items[0].quantity).to.equal(5);
  });
});
