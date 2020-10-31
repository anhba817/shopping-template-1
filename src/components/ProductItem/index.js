import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import styles from "./styles";
import "./productitem.css";
import CounterButton from "../CounterButton/index";
import MultipleCarousel from "../MultipleCarousel/index";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  handleCardClick = () => {
    this.setState({ openModal: true });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  handleButtonClick = (event) => {
    const { onAddToCart, product } = this.props;
    onAddToCart(product);
    event.stopPropagation();
  };

  changeNumberInCart = (delta) => {
    const { onIncreaseDecreaseNumber } = this.props;
    onIncreaseDecreaseNumber(delta);
  };

  handleCategoryClick = (category) => () => {
    const { history } = this.props;
    this.handleCloseModal();
    history.push("/home?category=" + category);
  };

  render() {
    const { classes, product, numberInCart } = this.props;
    const {
      name,
      description,
      quantity,
      unit,
      price,
      discountPercentage,
      images,
      categories,
    } = product;
    return (
      <div className={classes.container}>
        <Card
          variant="outlined"
          elevation={0}
          className={classes.card}
          onClick={this.handleCardClick}
        >
          <CardMedia
            className={classes.cardMedia}
            image={images[0]}
            title="Peppers"
          >
            {discountPercentage > 0 ? (
              <Chip
                label={`${discountPercentage}%`}
                size="small"
                className={classes.discount}
              />
            ) : null}
          </CardMedia>
          <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body2" className={classes.productweight}>
              {quantity} {unit}
            </Typography>
            <div className={classes.productMeta}>
              <div className={classes.priceWrapper}>
                {discountPercentage > 0 ? (
                  <span className="product-original-price">${price}</span>
                ) : null}
                <Typography variant="body2" className={classes.discountPrice}>
                  $
                  {Math.round(
                    (price * (1 - discountPercentage / 100) + Number.EPSILON) *
                      100
                  ) / 100}
                </Typography>
              </div>
              {numberInCart > 0 ? (
                <CounterButton
                  number={numberInCart}
                  className={classes.counterButton}
                  onChangingNumber={this.changeNumberInCart}
                />
              ) : (
                <Button
                  onClick={this.handleButtonClick}
                  startIcon={<ShoppingBasketIcon />}
                  className={classes.cartButton}
                >
                  Cart
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={this.state.openModal}
          onClose={this.handleCloseModal}
          disableAutoFocus
          disableEnforceFocus
          closeAfterTransition
        >
          <Fade in={this.state.openModal}>
            <Paper elevation={4} className={classes.paper}>
              <div className={classes.imageCarousel}>
                <MultipleCarousel name={name} carouselImages={images} />
                {discountPercentage > 0 ? (
                  <Chip
                    label={`${discountPercentage}%`}
                    className={classes.productInfoDiscount}
                  />
                ) : null}
              </div>
              <div className={classes.productInfo}>
                <div className={classes.productInfoName}>{name}</div>
                <div className={classes.productweight}>
                  {quantity} {unit}
                </div>
                <Typography variant="body2" className={classes.productDesc}>
                  {description}
                </Typography>
                <div className={classes.productInfoCategories}>
                  {categories.map((category) => (
                    <Chip
                      label={category}
                      key={category}
                      classes={{
                        root: classes.chipRoot,
                        label: classes.chipLabel,
                      }}
                      onClick={this.handleCategoryClick(category)}
                    />
                  ))}
                </div>
                <div className={classes.productMeta}>
                  <div className={classes.priceWrapper}>
                    {discountPercentage > 0 ? (
                      <span className="product-original-price-large">
                        ${price}
                      </span>
                    ) : null}
                    <Typography
                      variant="body2"
                      className={classes.discountPriceLarge}
                    >
                      $
                      {Math.round(
                        (price * (1 - discountPercentage / 100) +
                          Number.EPSILON) *
                          100
                      ) / 100}
                    </Typography>
                  </div>
                  {numberInCart > 0 ? (
                    <CounterButton
                      number={numberInCart}
                      className={classes.counterButton}
                      onChangingNumber={this.changeNumberInCart}
                    />
                  ) : (
                    <Button
                      onClick={this.handleButtonClick}
                      startIcon={<ShoppingBasketIcon />}
                      className={classes.cartButton}
                    >
                      Cart
                    </Button>
                  )}
                </div>
              </div>
            </Paper>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(ProductItem));
