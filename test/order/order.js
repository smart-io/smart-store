import { expect } from 'chai';
import store from '../../src/index';

describe('Order', () => {
  it('assert promise update', (done) => {
    store.order.update({ id: 1 }).then(() => {
      expect(store.order.id).to.equal(1);
      done();
    });
  });
});
