import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ItemsCarousel from "react-items-carousel";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import styles from "./styles";

class EditableContentRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  setActiveIndex = (index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes, className, carousel } = this.props;
    const { selectedIndex } = this.state;
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child, index) => {
        const props = {
          active: index === selectedIndex,
          onClick: () => this.setActiveIndex(index),
        };
        if (React.isValidElement(child)) {
          return React.cloneElement(child, props);
        }
        return child;
      }
    );
    if (carousel) {
      return (
        <div className={clsx(classes.radioCarousel, className)}>
          <ItemsCarousel
            numberOfCards={3}
            gutter={10}
            activeItemIndex={selectedIndex}
            requestToChangeActive={this.setActiveIndex}
            rightChevron={
              <IconButton>
                <ChevronRightIcon color="primary" />
              </IconButton>
            }
            leftChevron={
              <IconButton>
                <IconButton>
                  <ChevronLeftIcon color="primary" />
                </IconButton>
              </IconButton>
            }
            outsideChevron
            chevronWidth={40}
          >
            {childrenWithProps}
          </ItemsCarousel>
        </div>
      );
    } else {
      return (
        <div className={clsx(classes.radioRoot, className)}>
          {childrenWithProps}
        </div>
      );
    }
  }
}

export default withStyles(styles)(EditableContentRadio);
