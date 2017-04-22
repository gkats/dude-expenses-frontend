import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
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
  onClose, onSubmit, onChange, fields, errors,  dateTimeFormat, showActions,
  numberFormat, tagsDataSource
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
      <form onSubmit={onSubmit} style={{maxWidth: '256px', margin: '0 auto'}}>
        <PriceField
          name="priceCents"
          autoFocus="true"
          floatingLabelText="Price"
          value={fields.priceCents}
          onChange={(event, value) => onChange('priceCents', value)}
          errorText={errorsFor(errors, 'priceCents')}
          numberFormat={numberFormat}
        />
        <AutoComplete
          name="tag"
          floatingLabelText="Tag"
          hintText="e.g. food"
          dataSource={tagsDataSource}
          filter={AutoComplete.fuzzyFilter}
          maxSearchResults={5}
          value={fields.tag}
          searchText={fields.tag}
          onUpdateInput={(searchText, dataSource, params) => onChange('tag', searchText)}
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
          multiLine={true}
          rows={2}
          value={fields.notes}
          onChange={(event, value) => onChange('notes', value)}
        />
        { showActions ? actions : null }
      </form>
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