import React, { Component } from "react";
import AppBar from "../../components/AppBar/index";
import bgImage from "../../assets/img/sidebar-2.jpg";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as appearanceActions from "../../actions/appearance";
import ItemsCarousel from "react-items-carousel";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import CloseIcon from "@material-ui/icons/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import ProductItem from "../../components/ProductItem/index";
import SideMenu from "../../components/SideMenu/index";
import styles from "./styles";
import { sideMenuItems } from "../../constants";
import CartButton from "../../components/CartButton/index";
import CounterButton from "../../components/CounterButton/index";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedClasses: "dropdown show",
      image: bgImage,
      color: "blue",
      activeOfferIndex: 0,
      searchText: "",
      cartItems: [],
      openCart: false,
    };
  }

  componentDidMount() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    this.setState({ cartItems });
  }

  handleImageClick = (image) => {
    this.setState({ image });
  };
  handleColorClick = (color) => {
    this.setState({ color });
  };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };

  handleSearch = (event) => {
    event.preventDefault();
    console.log("Submit: ", this.state.searchText);
  };

  handleOnChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleMenuClick = (value) => (event) => {
    const { history } = this.props;
    history.push("/home?category=" + value);
    event.stopPropagation();
  };

  setActiveOfferIndex = (value) => {
    this.setState({ activeOfferIndex: value });
  };

  handleAddToCart = (product) => {
    const { cartItems } = this.state;
    cartItems.push({
      ...product,
      price: product.price * (1 - product.discountPercentage / 100),
      number: 1,
    });
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  handleChangingNumberInCart = (product) => (delta) => {
    const { cartItems } = this.state;
    let newCartItems = cartItems.map((x) =>
      x.name === product.name ? { ...x, number: x.number + delta } : x
    );
    newCartItems = newCartItems.filter((x) => x.number > 0);
    this.setState({ cartItems: newCartItems });
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  onOpenCart = () => {
    this.setState({ openCart: true });
  };

  onCloseCart = () => {
    this.setState({ openCart: false });
  };

  removeItemFromCart = (item) => {
    const { cartItems } = this.state;
    let newCartItems = cartItems.filter((x) => x.name !== item.name);
    this.setState({ cartItems: newCartItems });
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  gotoCheckout = () => {
    const { history } = this.props;
    history.push("/checkout");
  };

  render() {
    const { activeOfferIndex, searchText, cartItems, openCart } = this.state;
    const { classes, location, appearance, productItems } = this.props;
    const query = new URLSearchParams(location.search);
    let productsToShow = productItems;
    const categoryFilter = query.get("category");
    if (categoryFilter) {
      productsToShow = productItems.filter((item) =>
        item.categories.includes(categoryFilter)
      );
    }
    const total_cost = cartItems.reduce(
      (a, item) => a + item.number * item.price,
      0
    );
    return (
      <>
        <AppBar />
        <CardMedia
          alt="Contemplative Reptile"
          height="100vh"
          image={appearance.homeBackgroundImage.data_url}
          title="Grocery background"
          className={classes.cardMedia}
        >
          <Box mb={2}>
            <Typography variant="h2">
              Groceries Delivered in 90 Minutes
            </Typography>
          </Box>
          <Box mb={8}>
            <Typography variant="h3">
              Get your healthy foods & snacks delivered at your doorsteps all
              day everyday
            </Typography>
          </Box>
          <form
            className={classes.searchContainer}
            onSubmit={this.handleSearch}
          >
            <div className={classes.searchCategory}>Grocery</div>
            <InputBase
              className={classes.searchInput}
              placeholder="Search for your product from here"
              name="searchText"
              onChange={this.handleOnChange}
              value={searchText}
            />
            <Button
              size="large"
              variant="contained"
              className={classes.searchButton}
              startIcon={<SearchIcon />}
              type="submit"
            >
              Search
            </Button>
          </form>
        </CardMedia>
        <div className={classes.carouselPaper}>
          <ItemsCarousel
            infiniteLoop
            gutter={30}
            numberOfCards={3}
            activeItemIndex={activeOfferIndex}
            requestToChangeActive={this.setActiveOfferIndex}
            rightChevron={
              <IconButton>
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  size="lg"
                  color="white"
                />
              </IconButton>
            }
            leftChevron={
              <IconButton>
                <FontAwesomeIcon
                  icon={faChevronCircleLeft}
                  size="lg"
                  color="white"
                />
              </IconButton>
            }
          >
            <img
              src="/images/offer_1.png"
              alt="offer 1"
              height="100%"
              width="100%"
            />
            <img
              src="/images/offer_2.png"
              alt="offer 2"
              height="100%"
              width="100%"
            />
            <img
              src="/images/offer_3.png"
              alt="offer 3"
              height="100%"
              width="100%"
            />
          </ItemsCarousel>
        </div>
        <Paper className={classes.productMainPage}>
          <Hidden smDown implementation="css">
            <SideMenu
              items={sideMenuItems}
              onItemClick={this.handleMenuClick}
            />
          </Hidden>
          <div className={classes.itemsPage}>
            {productsToShow.map((product) => {
              let numberInCart = 0;
              const itemInCart = cartItems.find((i) => i.name === product.name);
              if (itemInCart) {
                numberInCart = itemInCart.number;
              }
              return (
                <ProductItem
                  key={product.name}
                  product={product}
                  numberInCart={numberInCart}
                  onAddToCart={this.handleAddToCart}
                  onIncreaseDecreaseNumber={this.handleChangingNumberInCart(
                    product
                  )}
                />
              );
            })}
          </div>
        </Paper>
        <CartButton
          itemList={cartItems}
          handleOpenCart={this.onOpenCart}
          total={total_cost}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={openCart}
          PaperProps={{ elevation: 16 }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <span className={classes.drawerHeaderText}>
              <LocalMallIcon />
              <div style={{ marginLeft: 10 }}>
                {cartItems.length}&nbsp;Items
              </div>
            </span>
            <IconButton onClick={this.onCloseCart}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
          <Divider />
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <div key={item.name}>
                <div
                  style={{
                    display: "flex",
                    padding: "15px 25px",
                    alignItems: "center",
                  }}
                >
                  <CounterButton
                    number={item.number}
                    className={classes.verticalCounterButton}
                    onChangingNumber={this.handleChangingNumberInCart(item)}
                  />
                  <img
                    alt={item.name}
                    src={item.images[0]}
                    style={{ width: 60, height: 60, margin: "0px 15px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 15,
                    }}
                  >
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="h5" className={classes.cartItemPrice}>
                      ${item.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        marginBottom: 5,
                      }}
                    >
                      {item.number} x {item.quantity} {item.unit}
                    </Typography>
                  </div>
                  <Typography
                    variant="h5"
                    style={{
                      marginLeft: "auto",
                    }}
                  >
                    $
                    {Math.round(
                      (item.price * item.number + Number.EPSILON) * 100
                    ) / 100}
                  </Typography>
                  <IconButton onClick={() => this.removeItemFromCart(item)}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </div>
                <Divider />
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "auto",
            }}
          >
            <Button>Do you have a voucher ?</Button>
            <Button
              color="primary"
              className={classes.checkoutButton}
              onClick={() => this.gotoCheckout()}
            >
              <Typography variant="h5" className={classes.checkoutButtonText}>
                Check out
              </Typography>
              <Chip
                label={`$${
                  Math.round((total_cost + Number.EPSILON) * 100) / 100
                }`}
                className={classes.checkoutChip}
              />
            </Button>
          </div>
        </Drawer>
        <Drawer
          className={classes.drawerBottom}
          anchor="bottom"
          open={openCart}
          onClose={this.onCloseCart}
          PaperProps={{ elevation: 16 }}
          classes={{
            paper: classes.drawerPaperBottom,
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography className={classes.drawerHeaderText}>
              <LocalMallIcon />
              <span style={{ marginLeft: 10 }}>
                {cartItems.length}&nbsp;Items
              </span>
            </Typography>
            <IconButton onClick={this.onCloseCart}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
          <Divider />
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <div key={item.name}>
                <div
                  style={{
                    display: "flex",
                    padding: "15px 25px",
                    alignItems: "center",
                  }}
                >
                  <CounterButton
                    number={item.number}
                    className={classes.verticalCounterButton}
                    onChangingNumber={this.handleChangingNumberInCart(item)}
                  />
                  <img
                    alt={item.name}
                    src={item.images[0]}
                    style={{ width: 60, height: 60, margin: "0px 15px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 15,
                    }}
                  >
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="h5" className={classes.cartItemPrice}>
                      ${item.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        marginBottom: 5,
                      }}
                    >
                      {item.number} x {item.quantity} {item.unit}
                    </Typography>
                  </div>
                  <Typography
                    variant="h5"
                    style={{
                      marginLeft: "auto",
                    }}
                  >
                    $
                    {Math.round(
                      (item.price * item.number + Number.EPSILON) * 100
                    ) / 100}
                  </Typography>
                  <IconButton onClick={() => this.removeItemFromCart(item)}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </div>
                <Divider />
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "auto",
            }}
          >
            <Button>Do you have a voucher ?</Button>
            <Button
              color="primary"
              className={classes.checkoutButton}
              onClick={() => this.gotoCheckout()}
            >
              <Typography variant="h5" className={classes.checkoutButtonText}>
                Check out
              </Typography>
              <Chip
                label={`$${
                  Math.round((total_cost + Number.EPSILON) * 100) / 100
                }`}
                className={classes.checkoutChip}
              />
            </Button>
          </div>
        </Drawer>
        {/* <FixedPlugin /> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appearance: state.appearance,
    productItems: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appearanceActionCreators: bindActionCreators(appearanceActions, dispatch),
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Home);
