import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import ConfirmationDialog from "../ConfirmationDialog/index";
import styles from "./styles";

const issuerLogo = {
  visa: "/images/creditCardIssuer/visa.svg",
  mastercard: "/images/creditCardIssuer/mastercard.svg",
  jcb: "/images/creditCardIssuer/jcb.svg",
  discover: "/images/creditCardIssuer/discover.svg",
  amex: "/images/creditCardIssuer/american_express.svg",
};

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
    };
  }

  handleDeleteClick = (event) => {
    this.setState({ openDeleteDialog: true });
    event.stopPropagation();
  };

  handleCloseDeleteDialog = () => {
    this.setState({ openDeleteDialog: false });
  };

  handleDelete = () => {
    const { handleDeleteCard, card } = this.props;
    this.setState({ openDeleteDialog: false });
    if (handleDeleteCard) {
      handleDeleteCard(card.id);
    }
  };

  render() {
    const { classes, card, deletable, active, className, onClick } = this.props;
    const { openDeleteDialog } = this.state;

    return (
      <Card
        className={clsx(classes.container, className, {
          [classes.active]: active,
        })}
        elevation={0}
        onClick={onClick}
      >
        <img src={issuerLogo[card.issuer]} alt="logo" style={{ height: 40 }} />
        <Typography variant="body2" className={classes.content}>
          Card Number
        </Typography>
        <div className={classes.cardNumber}>
          <Typography variant="body1" className={classes.cardNumberValue}>
            ****
          </Typography>
          <Typography variant="body1" className={classes.cardNumberValue}>
            ****
          </Typography>
          <Typography variant="body1" className={classes.cardNumberValue}>
            ****
          </Typography>
          <Typography variant="body1" className={classes.cardNumberValue}>
            {card.number.slice(-4)}
          </Typography>
        </div>
        <Typography variant="body1" className={classes.nameOnCard}>
          {card.name}
        </Typography>
        <span className={clsx(classes.buttonWrapper, "hidden-button")}>
          {deletable ? (
            <IconButton
              className={classes.deleteButton}
              onClick={this.handleDeleteClick}
            >
              <CloseIcon style={{ color: "#ffffff", fontSize: 16 }} />
            </IconButton>
          ) : null}
        </span>
        <ConfirmationDialog
          open={openDeleteDialog}
          title={`Are you sure you want to delete this card ?`}
          text="You cannot undo this deletion"
          handleClose={this.handleCloseDeleteDialog}
          handleOKClick={this.handleDelete}
        />
      </Card>
    );
  }
}

export default withStyles(styles)(CreditCard);
