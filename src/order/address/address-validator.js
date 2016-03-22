import Validator from '../../validator';
import validator from 'validator';

class AddressValidator extends Validator {
  static validate(address) {
    let errors = {};

    if (address.address1 === null || !validator.isLength(address.address1, 1)) {
      errors.address1 = 'address1';
    }

    if (address.city === null || !validator.isLength(address.city, 1)) {
      errors.city = 'city';
    }

    if (address.country === null || !validator.isLength(address.country, 2, 2)) {
      errors.country = 'country';
    }

    if (address.country == 'US' || address.country == 'CA') {
      if (address.region === null || !validator.isLength(address.region, 2, 2)) {
        errors.region = 'region';
      }
    }

    if (address.postal_code === null || !validator.isLength(address.postal_code, 1)) {
      errors.postal_code = 'postal_code';
    }

    return errors;
  }
}

export default AddressValidator;
