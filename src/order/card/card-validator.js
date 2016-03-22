import Validator from '../../validator';
import validator from 'validator';

class CardValidator extends Validator {
  static validate(card) {
    let errors = {};

    if (card.name === null || !validator.isLength(card.name, 1)) {
      errors.name = 'name_lenght';
    } else if (!validator.contains(card.name, ' ')) {
      errors.name = 'name_incomplete';
    }

    if (card.number === null || !validator.isCreditCard(card.number)) {
      errors.number = 'number';
    }

    if (card.expiration_month === null || !validator.isNumeric(card.expiration_month) || !validator.isLength(card.expiration_month, 1, 2)) {
      errors.expiration_month = 'expiration_month';
    }

    if (card.expiration_year === null || !validator.isNumeric(card.expiration_year) || !validator.isLength(card.expiration_year, 1, 2)) {
      errors.expiration_year = 'expiration_year';
    }

    if (card.security_code === null || !validator.isNumeric(card.security_code) || !validator.isLength(card.security_code, 3, 4)) {
      errors.security_code = 'security_code';
    }

    return errors;
  }
}

export default CardValidator;
