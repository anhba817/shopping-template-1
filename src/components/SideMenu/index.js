import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Sticky from "react-sticky-el";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "./styles";
import "./sidemenu.css";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    paddingLeft: 40,
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 15,
    color: "rgb(13, 17, 54)",
    "&:hover": {
      color: "#32a879",
    },
    marginBottom: -1,
    minHeight: 60,
    "&$expanded": {
      minHeight: 40,
    },
  },
  content: {
    "&$expanded": {
      margin: 0,
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}))(MuiAccordionDetails);

class SideMenu extends Component {
  render() {
    const { classes, items, onItemClick } = this.props;
    return (
      <div className={classes.productSideMenu}>
        <Sticky
          topOffset={-80}
          className="overflow-scroll"
          stickyClassName="overflow-scroll-sticky"
        >
          {items.map((item, index) => {
            return (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Button
                    onFocus={(event) => event.stopPropagation()}
                    onClick={onItemClick(item.value)}
                    className={classes.menu}
                  >
                    {item.label}
                  </Button>
                </AccordionSummary>
                <AccordionDetails>
                  <List component="nav" aria-label="main mailbox folders">
                    {item.children.map((it, i) => (
                      <ListItem
                        key={i}
                        className={classes.item}
                        button
                        onClick={onItemClick(it.value)}
                      >
                        {it.label}
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Sticky>
      </div>
    );
  }
}

SideMenu.propTypes = {};

export default withStyles(styles)(SideMenu);
