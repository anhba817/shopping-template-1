import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Cards from "react-credit-cards";
import uniqid from "uniqid";
import "react-credit-cards/es/styles-compiled.css";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Zoom from "@material-ui/core/Zoom";
import styles from "./styles";

function GetCardType(number) {
  // visa
  var re = new RegExp("^4");
  if (number.match(re) != null) return "visa";

  // Mastercard
  // Updated for Mastercard 2017 BINs expansion
  if (
    /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
      number
    )
  )
    return "mastercard";

  // AMEX
  re = new RegExp("^3[47]");
  if (number.match(re) != null) return "amex";

  // Discover
  re = new RegExp(
    "^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"
  );
  if (number.match(re) != null) return "discover";

  // Diners
  re = new RegExp("^36");
  if (number.match(re) != null) return "diners";

  // Diners - Carte Blanche
  re = new RegExp("^30[0-5]");
  if (number.match(re) != null) return "diners_carte_blanche";

  // JCB
  re = new RegExp("^35(2[89]|[3-8][0-9])");
  if (number.match(re) != null) return "jcb";

  // Visa Electron
  re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
  if (number.match(re) != null) return "visa_electron";

  return "";
}

class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
      issuer: "",
      errorNumber: false,
      errorCvc: false,
      errorExpiry: false,
      errorName: false,
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    const { card } = this.props;
    if (card) {
      this.setState({
        cvc: card.cvc,
        expiry: card.expiry,
        name: card.name,
        number: card.number,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.card !== this.props.card) {
      if (this.props.card) {
        this.setState({
          cvc: this.props.card.cvc,
          expiry: this.props.card.expiry,
          name: this.props.card.name,
          number: this.props.card.number,
        });
      } else {
        this.setState(this.initialState);
      }
    }
  }

  handleOnChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    if (name === "number") {
      const issuer = GetCardType(value);
      if (issuer) {
        this.setState({ issuer });
        if (/^\d{16}$/.test(value)) {
          this.setState({ errorNumber: false });
        } else {
          this.setState({ errorNumber: true });
        }
      } else {
        this.setState({ errorNumber: true });
      }
    }
    if (name === "expiry") {
      if (/^\d{3,}$/.test(value)) {
        value = value.slice(0, 2) + "/" + value.slice(2);
      }
      if (!/^\d{2}\/?\d{2}$/.test(value)) {
        this.setState({ errorExpiry: true });
      } else {
        const month = value.split("/")[0];
        if (month > 12 || month < 1) {
          this.setState({ errorExpiry: true });
        } else {
          let today = new Date();
          const year = "20" + value.split("/")[1];
          const expiryDate = new Date(year, month);
          if (expiryDate > today) {
            this.setState({ errorExpiry: false });
          } else {
            this.setState({ errorExpiry: true });
          }
        }
      }
    }
    if (name === "cvc") {
      if (/^\d{3}$/.test(value)) {
        this.setState({ errorCvc: false });
      } else {
        this.setState({ errorCvc: true });
      }
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSave, handleClose } = this.props;
    const { cvc, expiry, number, name, issuer } = this.state;
    let isValid = true;
    if (!/^\d{3}$/.test(cvc)) {
      this.setState({ errorCvc: true });
      isValid = false;
    }
    if (issuer === "") {
      this.setState({ errorNumber: true });
      isValid = false;
    }
    if (name === "") {
      this.setState({ errorName: true });
      isValid = false;
    }
    if (!/^\d{16}$/.test(number)) {
      this.setState({ errorNumber: true });
      isValid = false;
    }
    if (!/^\d{2}\/?\d{2}$/.test(expiry)) {
      this.setState({ errorExpiry: true });
      isValid = false;
    } else {
      const month = expiry.split("/")[0];
      if (month > 12 || month < 1) {
        this.setState({ errorExpiry: true });
        isValid = false;
      } else {
        let today = new Date();
        const year = "20" + expiry.split("/")[1];
        const expiryDate = new Date(year, month);
        if (expiryDate < today) {
          this.setState({ errorExpiry: true });
          isValid = false;
        }
      }
    }
    if (isValid) {
      onSave({
        id: uniqid(),
        cvc: this.state.cvc,
        name: this.state.name,
        expiry: this.state.expiry,
        number: this.state.number,
        issuer: this.state.issuer,
      });
      handleClose();
    }
  };

  render() {
    const { open, handleClose } = this.props;
    const {
      cvc,
      number,
      name,
      expiry,
      focus,
      errorNumber,
      errorExpiry,
      errorCvc,
      errorName,
    } = this.state;
    return (
      <Dialog
        open={open}
        TransitionComponent={Zoom}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ position: "relative" }}>
          Add new credit card
          <IconButton
            size="small"
            onClick={handleClose}
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
          <form onSubmit={this.handleSubmit} style={{ margin: 20 }}>
            <TextField
              fullWidth
              error={errorNumber}
              variant="outlined"
              name="number"
              onChange={this.handleOnChange}
              label="Card Number"
              style={{ marginTop: 10 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              name="name"
              error={errorName}
              label="Name on card"
              onChange={this.handleOnChange}
              style={{ marginTop: 10 }}
            />
            <div
              style={{ marginTop: 10, display: "flex", flexDirection: "row" }}
            >
              <TextField
                fullWidth
                variant="outlined"
                name="expiry"
                error={errorExpiry}
                label="Valid Until"
                value={expiry}
                onChange={this.handleOnChange}
                style={{ flex: 2 }}
              />
              <TextField
                fullWidth
                variant="outlined"
                name="cvc"
                error={errorCvc}
                label="CVC"
                onChange={this.handleOnChange}
                style={{ flex: 1, marginLeft: 15 }}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 10 }}
              disabled={errorNumber || errorCvc || errorExpiry}
            >
              Save Card
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(CreditCardForm);
