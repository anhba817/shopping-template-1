import React, { Component } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as appearanceActions from "../../actions/appearance";
import HelpIcon from "@material-ui/icons/Help";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from "@material-ui/icons/Search";
import LanguagesMenu from "../LanguagesMenu/index";
import InputBase from "@material-ui/core/InputBase";
import styles from "./styles";
import { Typography } from "@material-ui/core";

function HideOnScroll(props) {
  const { children, window, fixed } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
  });
  const fixedTrigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 700,
  });

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger || fixedTrigger || Boolean(fixed)}
    >
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

class HideAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editableContent: "My Shop",
      open: false,
    };
  }

  handleChange = (evt) => {
    this.setState({ editableContent: evt.target.value });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, appearance } = this.props;
    const elevation = this.props.elevation ? this.props.elevation : 0;
    const { open, editableContent } = this.state;
    const tooLong = editableContent.replace(/&nbsp;/g, " ").length > 11;
    return (
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...this.props}>
          <AppBar className={classes.appBar} elevation={elevation}>
            <Toolbar className={classes.toolBar}>
              <div className={classes.left}>
                <Hidden smUp implementation="css">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                  >
                    <MenuRoundedIcon fontSize="large" />
                  </IconButton>
                </Hidden>
                {appearance.logo.useText ? (
                  <Typography
                    className={clsx(classes.brandName, {
                      [classes.brandNameSmall]:
                        tooLong || window.innerWidth < 960,
                    })}
                  >
                    {appearance.logo.text}
                  </Typography>
                ) : (
                  <img
                    alt="shop logo"
                    src={appearance.logo.image.data_url}
                    style={{ maxWidth: 300, maxHeight: 120}}
                  />
                )}

                {/* <Hidden smDown implementation="css">
                  <CategoriesMenu />
                </Hidden> */}
              </div>
              <div className={classes.search}>
                <SearchIcon className={classes.searchIcon} fontSize="large" />
                <InputBase
                  placeholder="Search your products from here…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div className={classes.right}>
                <Hidden smDown implementation="css">
                  <Button className={classes.textButton}>Offer</Button>
                  <Button className={classes.textButton}>
                    <HelpIcon fontSize="small" />
                    &nbsp; Need Help
                  </Button>
                </Hidden>
                <LanguagesMenu />
                <Button className={classes.joinButton}>Join</Button>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Drawer anchor="left" open={open} onClose={this.handleDrawerClose}>
          <div className={classes.drawer}>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </React.Fragment>
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
)(HideAppBar);
