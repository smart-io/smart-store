import Validator from '../Validator';
import AddressValidator from '../Address/AddressValidator';
import CardValidator from '../Card/CardValidator';
import CustomerValidator from '../Customer/CustomerValidator';

class OrderValidator extends Validator {
  static validate(order) {
    var errors = {};

    if (!AddressValidator.assert(order.shippingAddress)) {
      errors.shippingAddress = AddressValidator.validate(order.shippingAddress);
    }

    if (!AddressValidator.assert(order.billingAddress)) {
      errors.billingAddress = AddressValidator.validate(order.billingAddress);
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
