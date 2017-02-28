import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const errorsFor = (errors, name) => {
  if (errors && Object.keys(errors).length && errors[name]) {
    return errors[name].join(', ');
  }
  return null;
};

const UserForm = ({ onChange, onSubmit, fields, errors }) => (
  <form onSubmit={onSubmit} style={{ maxWidth: '256px', margin: '0 auto'}}>
    <TextField
      type="email"
      name="email"
      value={fields.email}
      floatingLabelText="Email"
      hintText="your@email.com"
      errorText={errorsFor(errors, 'email')}
      onChange={onChange}
    />
    <TextField
      type="password"
      name="password"
      value={fields.password}
      floatingLabelText="Password"
      hintText="At least 6 characters"
      errorText={errorsFor(errors, 'password')}
      onChange={onChange}
    />
  </form>
);

UserForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object,
  errors: PropTypes.object
};

UserForm.defaultProps = {
  fields: {},
  errors: {}
};

export default UserForm;