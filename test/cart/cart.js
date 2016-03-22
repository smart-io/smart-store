import { expect } from 'chai';
import store from '../../src/app';
import {defaultTax} from '../../src/items/item';
import * as cart from '../../src/cart/cart';

describe('Cart', () => {
  it('add item to cart', () => {
    cart.addItem({...defaultTax});
    expect(store.getState()['cart'].items.length).to.equal(1);
  });

  it('remove item from cart', () => {
    expect(store.getState()['cart'].items.length).to.equal(1);
    cart.removeItem(0);
    expect(store.getState()['cart'].items.length).to.equal(0);
  });

  it('change cart item quantity', () => {
    cart.addItem({...defaultTax});
    cart.changeItemQuantity(0, 5);
    expect(store.getState()['cart'].items[0].quantity).to.equal(5);
  });
});
