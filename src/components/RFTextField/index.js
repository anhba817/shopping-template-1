import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class RFTextField extends Component {
  render() {
    const {
      autoComplete,
      input,
      InputProps,
      meta: { touched, error, submitError },
      ...other
    } = this.props;

    return (
      <TextField
        error={Boolean(touched && (error || submitError))}
        {...input}
        {...other}
        InputProps={{
          inputProps: {
            autoComplete,
          },
          ...InputProps,
        }}
        helperText={touched ? error || submitError : ''}
      />
    );
  }
}

RFTextField.propTypes = {
  autoComplete: PropTypes.string,
  input: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
    submitError: PropTypes.string,
  }).isRequired,
};

export default RFTextField;
