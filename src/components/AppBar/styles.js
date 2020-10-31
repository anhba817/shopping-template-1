const styles = (theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: 10,
    height: 80,
    zIndex: 99,
  },
  brandName: {
    color: theme.palette.primary.main,
    paddingTop: 5,
    [theme.breakpoints.up('md')]: {
      fontSize: 36,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
  },
  brandNameSmall: {
    fontSize: 20,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  textButton: {
    margin: 10,
    textTransform: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    fontSize: 16,
  },
  left: {
    display: 'flex',
    flex: 2,
    // flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexShrink: 0,
  },
  right: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  joinButton: {
    margin: 10,
    fontSize: 16,
    textTransform: 'none',
    '&:hover': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
    backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: 240,
  },
  search: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: theme.palette.grey[200],
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: '100%',
    height: 48,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  searchIcon: {
    pointerEvents: 'none',
    color: theme.palette.primary.main,
    padding: 5,
  },
  inputRoot: {
    color: theme.palette.secondary.main,
    width: '100%',
  },
  inputInput: {
    //padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: 10,
    width: '100%',
  },
});

export default styles;
