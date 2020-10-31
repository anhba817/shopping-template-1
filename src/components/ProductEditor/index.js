import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import clsx from "clsx";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as productActions from "../../actions/products";
import styles from "./styles";
import "./subpage.css";
import ConfirmationDialog from "../ConfirmationDialog/index";
import ProductEditForm from "../ProductEditForm/index";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      flex: "1 1 calc(33.3333% - 8px)",
      maxWidth: "calc(33.3333% - 8px)",
      position: "relative",
      marginBottom: 8,
      marginRight: 8,
      "& .hidden-button": {
        display: "none",
      },
      "&:hover .hidden-button": {
        display: "flex",
      },
    },
    cover: {
      minHeight: 50,
    },
    iconButton: {
      height: "100%",
      width: "100%",
      border: "1px dashed grey",
      borderRadius: 0,
    },
    buttonWrapper: {
      position: "absolute",
      top: 5,
      right: 5,
      display: "flex",
      WebkitBoxAlign: "center",
      alignItems: "center",
    },
    editButton: {
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
      color: theme.palette.primary.contrastText,
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: 0,
      width: 10,
      height: 10,
      borderRadius: "50%",
    },
    deleteButton: {
      backgroundColor: theme.palette.error.main,
      "&:hover": {
        backgroundColor: theme.palette.error.main,
      },
      color: theme.palette.primary.contrastText,
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: 0,
      width: 10,
      height: 10,
      borderRadius: "50%",
    },
  })
);

function ProductItem(props) {
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const classes = useStyles();
  const { item, handleDelete } = props;
  const { images, name } = item;

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  return (
    <Card className={classes.card} raised>
      <Typography variant="h6">{name}</Typography>
      <CardMedia className={classes.cover} image={images[0]} />
      <span className={clsx(classes.buttonWrapper, "hidden-button")}>
        <IconButton className={classes.editButton} onClick={handleOpenEditDialog}>
          <EditIcon style={{ fontSize: 8 }} />
        </IconButton>
        <IconButton
          className={classes.deleteButton}
          onClick={handleOpenDeleteDialog}
        >
          <CloseIcon style={{ fontSize: 12 }} />
        </IconButton>
      </span>
      <ConfirmationDialog
        open={openDeleteDialog}
        title={`Are you sure you want to delete this product ?`}
        text="Your edit is saved only if you press Save button so you can undo this action!"
        handleClose={handleCloseDeleteDialog}
        handleOKClick={handleDelete}
      />
      <ProductEditForm open={openEditDialog} handleClose={handleCloseEditDialog} />
    </Card>
  );
}

function AddNewProductItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised>
      <IconButton className={classes.iconButton}>
        <AddIcon fontSize="large" />
      </IconButton>
    </Card>
  );
}

class ProductEditor extends Component {
  constructor(props) {
    super(props);
    this.initialState = {};
    this.state = this.initialState;
  }

  handleChange = (event) => {
    const name = event.target.name;
    const { productActionCreators } = this.props;
    if (name === "logotext") {
      this.setState({ logotext: event.target.value });
      productActionCreators.changeLogoTextRequest(event.target.value);
    }
  };

  handleDeleteProduct = (id) => () => {
    const { productActionCreators } = this.props;
    productActionCreators.removeProductItem(id);
  }

  render() {
    const { classes, products } = this.props;
    return (
      <>
        <TextField label="Type here to search" size="small" fullWidth />
        <div
          className={clsx(
            classes.productContainer,
            "subpage-product-container"
          )}
        >
          <AddNewProductItem />
          {products.map((product) => (
            <ProductItem
              key={product.id}
              item={product}
              handleDelete={this.handleDeleteProduct(product.id)}
            />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productActionCreators: bindActionCreators(productActions, dispatch),
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductEditor);
