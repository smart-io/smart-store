import { assert } from 'chai';
import { storeEnhancer } from '../../src/index';
import { compose, createStore } from 'redux';

let reduxStore = createStore(e => e, {}, compose(storeEnhancer()));

describe('Redux', () => {
  it('validate redux store state', () => {
    assert.property(reduxStore.getState(), 'cart');
    assert.property(reduxStore.getState(), 'order');
    assert.property(reduxStore.getState(), 'taxes');
  });

  it('assert cart has proto', () => {
    const cart = reduxStore.getState().cart;
    assert.property(cart.__proto__, 'addItem');
  });

  it('assert order has proto', () => {
    const order = reduxStore.getState().order;
    assert.property(order.__proto__, 'update');
  });

  it('assert taxes has proto', () => {
    const taxes = reduxStore.getState().taxes;
    assert.property(taxes.__proto__, 'reset');
  });
});
