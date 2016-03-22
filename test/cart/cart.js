import { expect } from 'chai';
import store from '../../src/index';
import {defaultItem} from '../../src/items/item';

describe('Cart', () => {
  it('add item to cart', () => {
    store.cart.addItem({...defaultItem});
    expect(store.cart.items.length).to.equal(1);
  });

  it('remove item from cart', () => {
    expect(store.cart.items.length).to.equal(1);
    store.cart.removeItem(0);
    expect(store.cart.items.length).to.equal(0);
  });

  it('change cart item quantity', () => {
    store.cart.addItem({...defaultItem});
    store.cart.changeItemQuantity(0, 5);
    expect(store.cart.items[0].quantity).to.equal(5);
  });
});
