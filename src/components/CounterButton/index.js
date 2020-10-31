import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import AddingIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Remove";
import styles from "./styles";

class CounterButton extends Component {
  handleMinusButtonClick = (event) => {
    const { onChangingNumber } = this.props;
    onChangingNumber(-1);
    event.stopPropagation();
  }

  handleAddButtonClick = (event) => {
    const { onChangingNumber } = this.props;
    onChangingNumber(1);
    event.stopPropagation();
  }

  render() {
    const { classes, number, className, onChangingNumber, iconSize, ...other } = this.props;
    return (
      <div className={clsx(classes.container, className)} {...other}>
        <IconButton onClick={this.handleMinusButtonClick} size="small">
          <MinusIcon fontSize={iconSize} />
        </IconButton>
        <Typography>{number}</Typography>
        <IconButton onClick={this.handleAddButtonClick} size="small">
          <AddingIcon fontSize={iconSize} />
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(CounterButton);
