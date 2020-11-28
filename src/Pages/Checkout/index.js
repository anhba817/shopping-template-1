import React, { Component } from "react";
import uniqid from "uniqid";
import AppBar from "../../components/AppBar/index";
import Sticky from "react-sticky-el";
import EditableInfoCard from "../../components/EditableInfoCard/index";
import CreditCardInfo from "../../components/CreditCardInfo/index";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import styles from "./styles";
import "./custom_scroll.css";

const deliveryAddress = [
  {
    id: uniqid(),
    label: "Home",
    value: "27 Street, 2569 Heritage Road Visalia, CA 93291",
  },
  {
    id: uniqid(),
    label: "Office",
    value: "33 Baker Street, Crescent Road, CA 65746",
  },
];

const deliveryOptions = [
  {
    id: uniqid(),
    label: "Express-Delivery",
    value: "90 min express delivery",
  },
  {
    id: uniqid(),
    label: "8am-11am",
    value: "8.00 AM - 11.00 AM",
  },
  {
    id: uniqid(),
    label: "11am-2pm",
    value: "11.00 AM - 2.00 PM",
  },
  {
    id: uniqid(),
    label: "2pm-5pm",
    value: "2.00 PM - 5.00 PM",
  },
  {
    id: uniqid(),
    label: "5pm-8pm",
    value: "5.00 PM - 8.00 PM",
  },
  {
    id: uniqid(),
    label: "Next Day",
    value: "Next Day",
  },
];

const contactNumbers = [
  {
    id: uniqid(),
    label: "Primary",
    value: "(+84) 972 752 292",
  },
  {
    id: uniqid(),
    label: "Secondary",
    value: "(+84) 939 483 468",
  },
];

const creditCards = [
  {
    id: uniqid(),
    cvc: 123,
    expiry: "10/20",
    name: "Dong Tan Nguyen",
    number: "4901 4901 4901 4901",
    issuer: "visa",
  },
  {
    id: uniqid(),
    cvc: 121,
    expiry: "12/24",
    name: "Bui Thi Chuc Ly",
    number: "4901 2134 2134 2134",
    issuer: "mastercard",
  },
  {
    id: uniqid(),
    cvc: 232,
    expiry: "11/20",
    name: "Bui Thi Chuc Ly",
    number: "4901 0989 0989 0989",
    issuer: "jcb",
  },
  {
    id: uniqid(),
    cvc: 456,
    expiry: "10/21",
    name: "Bui Thi Chuc Ly",
    number: "5463 5463 5463 4901",
    issuer: "discover",
  },
  {
    id: uniqid(),
    cvc: 127,
    expiry: "10/22",
    name: "Bui Thi Chuc Ly",
    number: "5678 5678 4901 4901",
    issuer: "amex",
  },
];

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: deliveryAddress,
      contacts: contactNumbers,
      creditcards: creditCards,
      cartItems: [],
    };
  }

  componentDidMount() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      this.setState({ cartItems });
    }
  }

  handleDeleteAddressItem = (id) => {
    const { addresses } = this.state;
    const filteredAddresses = addresses.filter((item) => item.id !== id);
    this.setState({ addresses: filteredAddresses });
  };

  handleAddAddress = (address) => {
    const { addresses } = this.state;
    addresses.push(address);
    this.setState({ addresses });
  };

  handleEditAddress = (address) => {
    const { addresses } = this.state;
    const editedAddresses = addresses.map((item) =>
      item.id === address.id ? address : item
    );
    this.setState({ addresses: editedAddresses });
  };

  handleDeleteContactItem = (id) => {
    const { contacts } = this.state;
    const filteredcontacts = contacts.filter((item) => item.id !== id);
    this.setState({ contacts: filteredcontacts });
  };

  handleAddContact = (contact) => {
    const { contacts } = this.state;
    contacts.push(contact);
    this.setState({ contacts });
  };

  handleEditContact = (contact) => {
    const { contacts } = this.state;
    const editedcontacts = contacts.map((item) =>
      item.id === contact.id ? contact : item
    );
    this.setState({ contacts: editedcontacts });
  };

  handleDeleteCreditCard = (id) => {
    const { creditcards } = this.state;
    const filteredCreditCards = creditcards.filter((item) => item.id !== id);
    this.setState({ creditcards: filteredCreditCards });
  };

  handleAddCreditCard = (card) => {
    const { creditcards } = this.state;
    creditcards.push(card);
    this.setState({ creditcards });
  };

  render() {
    const { classes } = this.props;
    const { addresses, contacts, creditcards, cartItems } = this.state;
    let total_cost = 0;
    if (cartItems) {
      total_cost = cartItems.reduce(
        (a, item) => a + item.number * item.price,
        0
      );
    }
    const deliveryFee = 1.0;
    const discount = 0;
    return (
      <>
        <AppBar fixed />
        <div className={classes.checkoutWrapper}>
          <div className={classes.checkoutContainer}>
            <div className={classes.checkoutInfo}>
              <EditableInfoCard
                number={1}
                label="Delivery Address"
                name="address"
                editable
                deletable
                contents={addresses}
                handleDeleteItem={this.handleDeleteAddressItem}
                handleAdd={this.handleAddAddress}
                handleEditItem={this.handleEditAddress}
              />
              <EditableInfoCard
                number={2}
                label="Delivery Schedule"
                name="schedule"
                contents={deliveryOptions}
              />
              <EditableInfoCard
                number={3}
                label="Contact Number"
                name="contact"
                editable
                deletable
                contents={contacts}
                handleDeleteItem={this.handleDeleteContactItem}
                handleAdd={this.handleAddContact}
                handleEditItem={this.handleEditContact}
              />
              <CreditCardInfo
                number={4}
                label="Payment Options"
                name="card"
                cards={creditcards}
                handleDeleteItem={this.handleDeleteCreditCard}
                handleAdd={this.handleAddCreditCard}
                deletable
                carousel
              />
            </div>
            <div className={classes.checkoutCart}>
              <Sticky topOffset={-120} stickyClassName={classes.stickyCart}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="h2"
                    className={classes.checkoutCartTitle}
                  >
                    Your Order
                  </Typography>
                  <div className="custom-scroll-bar">
                    {cartItems.map((item) => (
                      <Typography
                        variant="body2"
                        key={item.name}
                        className={classes.checkoutItem}
                      >
                        <Typography
                          variant="body1"
                          style={{
                            fontWeight: 700,
                          }}
                        >
                          {item.number}
                        </Typography>
                        <span
                          style={{
                            margin: "0px 12px",
                          }}
                        >
                          x
                        </span>
                        <span style={{ marginRight: 15 }}>
                          {item.name} | {item.quantity} {item.unit}
                        </span>
                        <span style={{ marginLeft: "auto" }}>
                          $
                          {Math.round(
                            (item.price * item.number + Number.EPSILON) * 100
                          ) / 100}
                        </span>
                      </Typography>
                    ))}
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid rgb(230, 230, 230)",
                      padding: "20px 15px 0px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      className={classes.checkoutCalculate}
                    >
                      <span>Sub Total</span>
                      <span>
                        ${Math.round((total_cost + Number.EPSILON) * 100) / 100}
                      </span>
                    </Typography>
                    <div className={classes.checkoutCalculate}>
                      <span>Delivery Fee</span>
                      <span>
                        $
                        {Math.round((deliveryFee + Number.EPSILON) * 100) / 100}
                      </span>
                    </div>
                    <div className={classes.checkoutCalculate}>
                      <span>Discount</span>
                      <span>
                        ${Math.round((discount + Number.EPSILON) * 100) / 100}
                      </span>
                    </div>
                    <div className={classes.checkoutCalculateTotal}>
                      <span>Total(Incl. VAT)</span>
                      <span>
                        $
                        {Math.round(
                          (total_cost +
                            deliveryFee -
                            discount +
                            Number.EPSILON) *
                            100
                        ) / 100}
                      </span>
                    </div>
                  </div>
                </div>
              </Sticky>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(Checkout));
