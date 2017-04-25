import React from 'react';
import TextField from 'material-ui/TextField';

const numberToCents = (number) => number * 100;
const centsToNumber = (cents) => (parseFloat(cents) / 100).toFixed(2);
const displayNumber = (cents) => (cents ? centsToNumber(cents) : '');

class PriceField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: displayNumber(props.value)
    };
    this.changed = this.changed.bind(this);
  }

  changed(e) {
    e.preventDefault();

    if (!e.target.value) {
      this.setState({ value: e.target.value });
      this.props.onChange(this.props.name, '');
    } else {
      let value = e.target.value;
      if (value.match(/^\d+(\.(\d{1,2})?)?$/)) {
        this.setState({ value: e.target.value });
        this.props.onChange(this.props.name, numberToCents(value).toString());
      }
    }
  }

  value() {
    return this.state.value || displayNumber(this.props.value);
  }

  render() {
    return (
      <div>
        <TextField
          hintText={this.props.numberFormat(0)}
          type="tel"
          pattern="[0-9]*"
          noValidate
          value={this.value()}
          onChange={this.changed}
          name={this.props.name}
          autoFocus={this.props.autoFocus}
          errorText={this.props.errorText}
          floatingLabelText={this.props.floatingLabelText}
          style={{ maxWidth: '128px' }}
        />
      </div>
    );
  }
};

export default PriceField;