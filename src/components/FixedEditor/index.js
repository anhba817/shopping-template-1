import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as appearanceActions from "../../actions/appearance";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PaletteIcon from "@material-ui/icons/Palette";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import SaveIcon from "@material-ui/icons/Save";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CategoryIcon from "@material-ui/icons/Category";
import AppearanceEditor from "../AppearanceEditor/index";
import ProductEditor from '../ProductEditor/index';
import styles from "./styles";
import './editor.css';

class FixedEditor extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      open: false,
      selectedIndex: 0,
    };
    this.state = this.initialState;
  }

  togglePopper = (event) => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleListItemClick = (index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;
    const { open, selectedIndex } = this.state;
    let xhtml = null;
    if (selectedIndex === 0) {
      xhtml = <AppearanceEditor />;
    } else if (selectedIndex === 1) {
      xhtml = <ProductEditor />
    } else {
      xhtml = <span> Add more categories</span>
    }
    return (
      <>
        <div className={classes.container} onClick={this.togglePopper}>
          <span className={classes.title}>Edit page</span>
        </div>
        <Paper
          className={clsx(classes.paper, {
            [classes.paperHide]: !open,
          })}
          elevation={4}
        >
          <div className={classes.sideBar}>
            <List disablePadding style={{ marginTop: 50 }}>
              <Divider />
              <ListItem
                button
                divider
                disableGutters
                onClick={() => this.handleListItemClick(0)}
              >
                <div style={{ minWidth: 25, marginLeft: 5 }}>
                  <PaletteIcon color="primary" />
                </div>
                <ListItemText primary="Colors" />
              </ListItem>
              <ListItem
                button
                divider
                disableGutters
                onClick={() => this.handleListItemClick(1)}
              >
                <div style={{ minWidth: 25, marginLeft: 5 }}>
                  <AddShoppingCartIcon color="primary" />
                </div>
                <ListItemText primary="Manage products" />
              </ListItem>
              <ListItem
                button
                divider
                disableGutters
                onClick={() => this.handleListItemClick(2)}
              >
                <div style={{ minWidth: 25, marginLeft: 5 }}>
                  <CategoryIcon color="primary" />
                </div>
                <ListItemText primary="Manage categories" />
              </ListItem>
            </List>
          </div>
          <div className={classes.subpage}>
            <div className={classes.header}>
              <Tooltip title="Undo" placement="right">
                <IconButton aria-label="undo" color="primary">
                  <UndoIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Redo" placement="right">
                <IconButton aria-label="redo" color="primary">
                  <RedoIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Save" placement="right">
                <IconButton aria-label="save" color="primary">
                  <SaveIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className={clsx(classes.content, "subpage-content")}>
              {xhtml}
            </div>
          </div>
        </Paper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appearance: state.appearance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appearanceActionCreators: bindActionCreators(appearanceActions, dispatch),
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(FixedEditor);
