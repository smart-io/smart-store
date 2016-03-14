import { expect } from 'chai';
import { store, dispatch } from '../../src/app';
import Item from '../../src/item/item';
import * as actions from '../../src/cart/cart-actions';

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
