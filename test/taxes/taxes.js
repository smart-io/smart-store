import { expect } from 'chai';
import store from '../../src/index';
import {defaultTax} from '../../src/taxes/tax';

describe('Taxes', () => {
  it('reset taxes', () => {
    store.taxes.reset([{ ...defaultTax }]);
    expect(store.taxes.length).to.equal(1);
    expect(store.order.taxes.length).to.equal(1);
    expect(store.cart.taxes.length).to.equal(1);
    store.taxes.reset([]);
    expect(store.taxes.length).to.equal(0);
    expect(store.order.taxes.length).to.equal(0);
    expect(store.cart.taxes.length).to.equal(0);
  });
});
