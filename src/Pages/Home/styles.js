const styles = (theme) => ({
  cardMedia: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    width: "80%",
    maxWidth: 700,
    height: 40,
    paddingLeft: 5,
    border: "1px groove",
    borderRadius: 4,
  },
  searchCategory: {
    margin: 5,
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    color: theme.palette.primary.main,
  },
  searchInput: {
    marginLeft: 5,
    flex: 1,
  },
  searchButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  carouselPaper: {
    padding: "60px 45px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: 4,
  },
  productMainPage: {
    display: "flex",
    flexDirection: "row",
  },
  itemsPage: {
    flex: 1,
    padding: "15px 15px 50px",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("md")]: {
      padding: "0px 0px 50px",
    },
  },
  drawer: {
    width: 420,
    flexShrink: 0,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  drawerBottom: {
    flexShrink: 0,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: 420,
    border: 0,
  },
  drawerPaperBottom: {
    height: "50vh",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "3px 25px",
    justifyContent: "space-between",
  },
  drawerHeaderText: {
    display: "flex",
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: 15,
  },
  verticalCounterButton: {
    flexDirection: "column-reverse",
    width: 30,
    height: 90,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.secondary.main,
  },
  cartItemPrice: {
    marginTop: 10,
    marginBottom: 10,
    color: theme.palette.primary.main,
  },
  checkoutButton: {
    height: 48,
    width: "calc(100% - 30px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
    padding: 0,
    borderRadius: 48,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px",
    border: 0,
    outline: 0,
    cursor: "pointer",
    marginBottom: 15,
    marginLeft: 15,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  checkoutButtonText: {
    color: theme.palette.primary.contrastText,
    marginLeft: 30,
    textTransform: "none",
  },
  checkoutChip: {
    height: 44,
    padding: "0px 30px",
    borderRadius: 28,
    color: theme.palette.primary.main,
    fontSize: 15,
    fontWeight: 700,
  },
});

export default styles;
