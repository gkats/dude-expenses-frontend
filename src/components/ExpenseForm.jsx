import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const ExpenseForm = (props) => {
  let actions = [
    <FlatButton
      label="Cancel"
      onTouchTap={props.onClose}
    />,
    <RaisedButton
      label="Save"
      primary={true}
      onTouchTap={props.onSubmit}
    />
  ];

  return (
    <Dialog
      title="Add an expense"
      open={props.visible}
      onRequestClose={props.onClose}
      actions={actions}
      modal={true}
    >
      <form onSubmit={props.onSubmit}>
        <TextField
          floatingLabelText="Price"
          hintText={props.numberFormat(0)}
          autoFocus="true"
          value={props.price ? props.numberFormat(props.price / 100) : ''}
        />
        <TextField
          floatingLabelText="Tag"
          hintText="e.g. food"
          value={props.tag}
        />
        <DatePicker
          floatingLabelText="Date"
          formatDate={props.dateTimeFormat}
          value={props.date}
        />
        <TextField
          floatingLabelText="Notes (optional)"
          hintText="Add your notes here..."
          multiLine={true}
          rows={2}
          value={props.notes}
        />
      </form>
    </Dialog>
  );
};

export default ExpenseForm;