import { expect } from 'chai';
import store from '../../../src/index';

describe('Card', () => {
  it('validate empty card', (done) => {
    store.order.validate().catch((errors) => {
      expect(errors.card.name).to.equal('name_lenght');
      expect(errors.card.number).to.equal('number_length');
      expect(errors.card.expiration_month).to.equal('expiration_month');
      expect(errors.card.expiration_year).to.equal('expiration_year');
      expect(errors.card.security_code).to.equal('security_code');
      done();
    }).catch(done)
  });

  it('validate correct card', (done) => {
    store.order.updateCard({
      id: '',
      name: 'John',
      number: '4012888888881881',
      brand: '',
      expiration_month: '02',
      expiration_year: '19',
      security_code: '233'
    });

    store.order.validate().catch((errors) => {
      expect(errors.card).to.be.undefined;
      done();
    }).catch(done)
  });

  it('validate invalid card number', (done) => {
    store.order.updateCard({ number: '2012888888881881' });

    store.order.validate().catch((errors) => {
      expect(errors.card.number).to.equal('number_invalid');
      done();
    }).catch(done)
  });
});
