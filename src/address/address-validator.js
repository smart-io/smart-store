import Validator from '../validator';
import validator from 'validator';

class AddressValidator extends Validator {
  static validate(address) {
    let errors = {};

    if (!validator.isLength(address.address1, 1)) {
      errors.address1 = 'address1';
    }

    if (!validator.isLength(address.city, 1)) {
      errors.city = 'city';
    }

    if (!validator.isLength(address.country, 2, 2)) {
      errors.country = 'country';
    }

    if (address.country == 'US' || address.country == 'CA') {
      if (!validator.isLength(address.region, 2, 2)) {
        errors.region = 'region';
      }
    }

    if (!validator.isLength(address.postal_code, 1)) {
      errors.postal_code = 'postal_code';
    }

    return errors;
  }
}

export default AddressValidator;
