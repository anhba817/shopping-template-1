import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import styles from "./styles";

class CartButton extends Component {
  handleButtonClick = () => {
    const { handleOpenCart } = this.props;
    handleOpenCart();
  };

  render() {
    const { classes, itemList, total } = this.props;
    const numberOfItems = itemList.length;
    return (
      <button className={classes.container} onClick={this.handleButtonClick}>
        <span className={classes.title}>
          <LocalMallIcon fontSize="small" style={{ marginRight: 8 }} />
          {numberOfItems} Items
        </span>
        <span className={classes.body}>
          $ {Math.round((total + Number.EPSILON) * 100) / 100}
        </span>
      </button>
    );
  }
}

export default withStyles(styles)(CartButton);
