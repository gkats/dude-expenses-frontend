let errors = {};
let fields = {};

export function validate(attributes) {
  errors = {};
  fields = attributes;

  validatePresence('email');
  validatePresence('password');
  if (fields.email && !fields.email.match('^[^@]+@[^@]+\\.[^@]+$')) {
    errors.email = ['must be a valid email address'].concat(errors.email || []);
  }
  if (fields.password && fields.password.length < 6) {
    errors.password = ['must be at least 6 characters'].concat(errors.password || []);
  }

  return errors;
};

function validatePresence(fieldName, message = "can't be blank") {
  if (!fields[fieldName]) {
    errors[fieldName] = [message].concat(errors[fieldName] || []);
  }
};
