import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import PriceField from './PriceField';

const errorsFor = (errors, name) => {
  if (errors && Object.keys(errors).length && errors[name]) {
    return errors[name].join(', ');
  }
  return null;
};

const ExpenseForm = ({
  onClose, onSubmit, onChange, fields, errors,  dateTimeFormat, showActions
}) => {
  let actions = (
    <div>
      <FlatButton
        label="Cancel"
        onTouchTap={onClose}
      />
      <RaisedButton
        label="Save"
        primary={true}
        onTouchTap={onSubmit}
      />
    </div>
  );

  return (
    <div>
      <PriceField
        name="priceCents"
        autoFocus="true"
        floatingLabelText="Price"
        value={fields.priceCents}
        onChange={(event, value) => onChange('priceCents', value)}
        errorText={errorsFor(errors, 'priceCents')}
        currency="$"
      />
      <TextField
        name="tag"
        floatingLabelText="Tag"
        hintText="e.g. food"
        value={fields.tag}
        onChange={(event, value) => onChange('tag', value)}
        errorText={errorsFor(errors, 'tag')}
      />
      <DatePicker
        name="date"
        floatingLabelText="Date"
        formatDate={dateTimeFormat}
        value={fields.date}
        onChange={(event, value) => onChange('date', value)}
      />
      <TextField
        name="notes"
        floatingLabelText="Notes (optional)"
        hintText="Add your notes here..."
        multiLine={true}
        rows={2}
        value={fields.notes}
        onChange={(event, value) => onChange('notes', value)}
      />
      { showActions ? actions : null }
    </div>
  );
};

ExpenseForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  dateTimeFormat: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  fields: PropTypes.object,
  errors: PropTypes.object
};

ExpenseForm.defaultProps = {
  visible: true,
  fields: {},
  errors: {}
}

export default ExpenseForm;