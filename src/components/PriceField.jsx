import React from 'react';
import TextField from 'material-ui/TextField';

const numberToCents = (number) => number * 100;
const centsToNumber = (cents) => parseFloat(cents) / 100;

class PriceField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value ? centsToNumber(props.value) : ''
    };
    this.changed = this.changed.bind(this);
  }

  changed(e) {
    e.preventDefault();

    if (!e.target.value) {
      this.setState({ value: e.target.value });
    } else {
      let value = e.target.value
      if (value.match(/^\d+(\.(\d{1,2})?)?$/)) {
        this.setState({ value: e.target.value });
        this.props.onChange(this.props.name, numberToCents(value).toString());
      }
    }
  }

  render() {
    return (
      <div>
        <TextField
          hintText={this.props.numberFormat(0)}
          type="tel"
          pattern="[0-9]*"
          noValidate
          value={this.state.value}
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