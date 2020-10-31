import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import "react-credit-cards/es/styles-compiled.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import styles from "./styles";
import EditableContentRadio from "../EditableContentRadio/index";
import CreditCard from "../CreditCard/index";
import CredirCardForm from "../CreditCardForm/index";
import { Typography } from "@material-ui/core";

class CreditCardInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddDialog: false,
    };
  }

  handleAddNewItem = (item) => {
    const { handleAdd } = this.props;
    handleAdd(item);
    this.setState({ openAddDialog: false });
  };

  render() {
    const {
      classes,
      number,
      name,
      label,
      className,
      editable,
      deletable,
      cards,
      handleDeleteItem,
      carousel,
    } = this.props;
    const { openAddDialog } = this.state;
    return (
      <Card className={clsx(classes.container, className)}>
        <div className={classes.header}>
          <span className={classes.counter}>{number}</span>
          <span className={classes.title}>{label}</span>
        </div>
        <EditableContentRadio carousel={carousel}>
          {cards.map((card) => (
            <CreditCard
              card={card}
              className={clsx({
                [classes.editableContent]: !carousel,
                [classes.editableCarouselContent]: carousel,
              })}
              deletable
              handleDeleteCard={handleDeleteItem}
              key={card.id}
            />
          ))}
        </EditableContentRadio>
        {editable || deletable ? (
          <Button
            startIcon={<AddIcon />}
            onClick={() => this.setState({ openAddDialog: true })}
            className={classes.addButton}
          >
            Add {name}
          </Button>
        ) : null}
        <Button className={classes.voucherButton}>
          Do you have a voucher ?
        </Button>
        <Typography variant="body2" className={classes.termAndCondition}>
          By making this purchase you agree to our
          <Button className={classes.termAndConditionButton}>
            terms and conditions
          </Button>
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.checkoutButton}
        >
          Proceed to Checkout
        </Button>
        <CredirCardForm
          open={openAddDialog}
          handleClose={() => this.setState({ openAddDialog: false })}
          onSave={this.handleAddNewItem}
        />
      </Card>
    );
  }
}

export default withStyles(styles)(CreditCardInfo);
