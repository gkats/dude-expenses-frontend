let errors = {};
let fields = {};

export function validate(attributes) {
  errors = {};
  fields = attributes;

  validatePresence('tag');
  validatePresence('date');

  if (!fields.priceCents || !parseInt(fields.priceCents) > 0) {
    errors.priceCents = ['must be greater than zero'].concat(errors.priceCents || []);
  }

  return errors;
};

function validatePresence(fieldName, message = "can't be blank") {
  if (!fields[fieldName]) {
    errors[fieldName] = [message].concat(errors[fieldName] || []);
  }
};
