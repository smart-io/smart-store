class Validator {
  static assert(values) {
    const errors = this.validate(values);

    let assert = true;
    for (const prop in Object.keys(errors)) {
      if (typeof errors[prop] === 'object') {
        if (Object.keys(errors[prop]).length) assert = false;
      } else {
        assert = false;
      }
    }

    return assert;
  }
}

export default Validator;
