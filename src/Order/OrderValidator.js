import Validator from '../Validator';
import AddressValidator from '../Address/AddressValidator';
import CardValidator from '../Card/CardValidator';
import CustomerValidator from '../Customer/CustomerValidator';

class OrderValidator extends Validator {
  static validate(order) {
    var errors = {};

    if (!AddressValidator.assert(order.shipping_address)) {
      errors.shipping_address = AddressValidator.validate(order.shipping_address);
    }

    if (!AddressValidator.assert(order.billing_address)) {
      errors.billing_address = AddressValidator.validate(order.billing_address);
    }

    if (!CardValidator.assert(order.card)) {
      errors.card = CardValidator.validate(order.card);
    }

    if (!CustomerValidator.assert(order.customer)) {
      errors.customer = CustomerValidator.validate(order.customer);
    }

    return errors;
  }
}

export default OrderValidator;
