import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import EnglishIcon from "./EnglishIcon";
import VietnameseIcon from "./VietnameseIcon";
import styles from "./styles";

const categories = [
  {
    label: "English",
    icon: (size) => (size ? <EnglishIcon fontSize={size} /> : <EnglishIcon />),
  },
  {
    label: "Vietnamese",
    icon: (size) =>
      size ? <VietnameseIcon fontSize={size} /> : <VietnameseIcon />,
  },
];

class CategoriesMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selectedIndex: 0,
    };
  }

  handleOpenMenu = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleCloseMenu = () => {
    this.setState({
      anchorEl: null,
    });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({
      anchorEl: null,
      selectedIndex: index,
    });
  };

  render() {
    const { anchorEl, selectedIndex } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.menuContainer}>
        <Hidden mdDown implementation="css">
          <Button onClick={this.handleOpenMenu} className={classes.menuButton}>
            <ListItemIcon>{categories[selectedIndex].icon()}</ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.buttonText}
              primary={categories[selectedIndex].label}
            />
          </Button>
        </Hidden>
        <Hidden mdUp implementation="css">
          <Button onClick={this.handleOpenMenu} className={classes.menuButton}>
            {categories[selectedIndex].icon("large")}
          </Button>
        </Hidden>
        <Menu
          id="customized-menu"
          anchorEl={anchorEl}
          elevation={0}
          getContentAnchorEl={null}
          keepMounted
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={Boolean(anchorEl)}
          onClose={this.handleCloseMenu}
        >
          {categories.map((option, index) => (
            <MenuItem
              key={option.label}
              selected={index === selectedIndex}
              onClick={(event) => this.handleMenuItemClick(event, index)}
            >
              <ListItemIcon>{option.icon()}</ListItemIcon>
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(CategoriesMenu);
