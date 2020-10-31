import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as productActions from "../../actions/products";
import { Field, Form } from 'react-final-form';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import RFTextField from "../RFTextField/index";
import Zoom from "@material-ui/core/Zoom";
import { required, isPositiveNumber, isNotNegativeNumber, email } from "../../validation";
import styles from "./styles";

class ProductEditForm extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      label: "",
      value: "",
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    const { content } = this.props;
    if (content) {
      this.setState({
        value: content.value,
      });
      if (content.label) {
        this.setState({
          label: content.label,
        });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.content !== this.props.content) {
      if (this.props.content) {
        this.setState({
          value: this.props.content.value,
        });
        if (this.props.content.label) {
          this.setState({
            label: this.props.content.label,
          });
        }
      } else {
        this.setState(this.initialState);
      }
    }
  }

  validate = (values) => {
    const errors = required(['email', 'password', 'firstname'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };

  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    const { open, handleClose, classes } = this.props;
    return (
      <Dialog
        open={open}
        TransitionComponent={Zoom}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Form
            onSubmit={this.handleSubmit}
            subscription={{ submitting: true }}
            validate={this.validate}
          >
            {({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autoComplete="firstname"
                      autoFocus
                      component={RFTextField}
                      fullWidth
                      label="First Name"
                      margin="normal"
                      name="firstname"
                      required
                      size="large"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autoComplete="lastname"
                      autoFocus
                      component={RFTextField}
                      fullWidth
                      label="Last Name"
                      margin="normal"
                      name="lastname"
                      required
                      size="large"
                    />
                  </Grid>
                </Grid>
                <Field
                  autoComplete="email"
                  autoFocus
                  component={RFTextField}
                  disabled={submitting}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  required
                  size="large"
                />
                <Field
                  fullWidth
                  size="large"
                  component={RFTextField}
                  disabled={submitting}
                  required
                  name="password"
                  autoComplete="current-password"
                  label="Password"
                  type="password"
                  margin="normal"
                />
                <Button
                  className={classes.button}
                  disabled={submitting}
                  size="large"
                  color="secondary"
                  fullWidth
                >
                  {submitting ? 'In progress…' : 'Sign Up'}
                </Button>
              </form>
            )}
          </Form>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productActionCreators: bindActionCreators(productActions, dispatch),
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductEditForm);

