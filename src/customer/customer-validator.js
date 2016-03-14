import Validator from '../validator';
import validator from 'validator';

class CustomerValidator extends Validator {
  static validate(customer) {
    let errors = {};

    if (!validator.isLength(customer.name, 1)) {
      errors.name = 'name_lenght';
    } else if (!validator.contains(customer.name, ' ')) {
      errors.name = 'name_incomplete';
    }

    if (!validator.isLength(customer.email, 1)) {
      errors.email = 'email_lenght';
    } else if (!validator.isEmail(customer.email)) {
      errors.email = 'email_invalid';
    }

    return errors;
  }
}

export default CustomerValidator;
