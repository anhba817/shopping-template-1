const styles = (theme) => ({
  container: {
    flex: "0 0 33.3333%",
    maxWidth: "33.3333%",
    height: "max-content",
    minHeight: 360,
    minWidth: 250,
    borderRadius: 6,
    padding: 15,
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  card: {
    position: "relative",
    height: "100%",
    padding: 5,
    cursor: "pointer",
  },
  cardMedia: {
    height: 240,
  },
  discount: {
    position: "absolute",
    top: 15,
    right: 15,
    paddingLeft: 5,
    paddingRight: 5,
    color: theme.palette.primary.contrastText,
    backgroundColor: "rgb(255, 173, 94)",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
  },
  productweight: {
    marginTop: 10,
  },
  productMeta: {
    display: "flex",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  priceWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  discountPrice: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    paddingTop: 5,
    fontSize: 15,
  },
  cartButton: {
    border: "2px solid rgb(247, 247, 247)",
    borderRadius: 24,
    fontSize: 15,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main,
    paddingLeft: 20,
    paddingRight: 20,
    "&:hover": {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
    textTransform: "none",
  },
  counterButton: {
    width: 104,
    height: 42,
  },
  paper: {
    maxWidth: "calc(100% - 100px)",
    maxHeight: "calc(100% - 30px)",
    height: "auto",
    borderRadius: 10,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexWrap: "wrap",
    outline: 0,
    [theme.breakpoints.down('sm')]: {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translate(-50%, 0)",
      overflowY: "scroll",
    },
  },
  imageCarousel: {
    width: "50%",
    height: "100%",
    maxWidth: "50%",
    padding: "60px 30px",
    position: "relative",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      maxWidth: "100%",
    },
  },
  productInfo: {
    width: "50%",
    maxWidth: "50%",
    borderLeft: "2px solid rgb(243, 243, 243)",
    padding: 50,
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      maxWidth: "100%",
    },
  },
  productInfoDiscount: {
    position: "absolute",
    top: 30,
    right: 30,
    paddingLeft: 10,
    paddingRight: 10,
    color: theme.palette.primary.contrastText,
    backgroundColor: "rgb(255, 173, 94)",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
  },
  productInfoName: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 10,
    fontFamily: "'Poppins', sans-serif",
    fontSize: 21,
    fontWeight: 600,
    color: theme.palette.secondary.main,
  },
  productDesc: {
    fontSize: 15,
    // color: "rgb(66, 69, 97)",
    lineHeight: 2,
    marginTop: 30,
  },
  productInfoCategories: {
    marginTop: 30,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  chipRoot: {
    margin: theme.spacing(0.5),
  },
  chipLabel: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 13,
    fontWeight: 700,
    color: theme.palette.secondary.main,
  },
  discountPriceLarge: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    paddingTop: 10,
    fontSize: 24,
  }
});

export default styles;
