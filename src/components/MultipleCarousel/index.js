import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import "react-multi-carousel/lib/styles.css";
import SwipeableViews from "react-swipeable-views";
import ButtonBase from "@material-ui/core/ButtonBase";
import styles from "./styles";

class MultipleCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleChange = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { classes, carouselImages, name, className } = this.props;
    const { activeIndex } = this.state;
    return (
      <div className={className}>
        <SwipeableViews
          index={activeIndex}
          onChangeIndex={this.handleChangeIndex}
        >
          {carouselImages.map((im, index) => (
            <div key={index}>
              <img src={im} className={classes.img} alt={`${name} ${index}`} />
            </div>
          ))}
        </SwipeableViews>
        <div className={classes.buttonContainer}>
          {carouselImages.map((im, i) => (
            <ButtonBase
              focusRipple
              key={i}
              className={clsx(classes.image, {
                [classes.active]: i === activeIndex,
              })}
              onClick={() => this.handleChange(i)}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${im})`,
                }}
              />
            </ButtonBase>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MultipleCarousel);
