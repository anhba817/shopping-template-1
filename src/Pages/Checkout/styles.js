const styles = (theme) => ({
  checkoutWrapper: {
    width: '100%',
    display: 'flex',
    padding: '50px 60px 60px',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 80,
    },
  },
  checkoutContainer: {
    width: '100%',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      width: 970,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  checkoutInfo: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    marginRight: 20,
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      marginRight: 10,
    },
    [theme.breakpoints.down('xs')]: {
      order: 1,
      marginRight: 0,
    },
  },
  checkoutCart: {
    width: 270,
    flexShrink: 0,
    paddingTop: 20,
    position: 'relative',
    [theme.breakpoints.between('sm','md')]: {
      width: 260,
    },
    [theme.breakpoints.down('xs')]: {
      order: 0,
      width: '100%',
      padding: '40px 15px 30px',
      position: 'relative !important',
    },
  },
  stickyCart: {
    paddingTop: 120,
    [theme.breakpoints.down('xs')]: {
      position: 'relative !important',
      paddingTop: 0,
    },
  },
  checkoutCartTitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 25,
  },
  checkoutItem: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 15,
    fontSize: "calc(14px)",
  },
  checkoutCalculate: {
    fontSize: 'calc(14px)',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  checkoutCalculateTotal: {
    fontSize: 'calc(14px)',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
    fontWeight: theme.typography.fontWeight,
    color: theme.typography.color,
  },
});

export default styles;
