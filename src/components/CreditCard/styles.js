const styles = (theme) => ({
  container: {
    display: 'inline-flex',
    flexDirection: 'column',
    textAlign: 'left',
    alignItems: 'flex-start',
    padding: 15,
    position: 'relative',
    lineHeight: 24,
    cursor: 'pointer',
    borderRadius: 6,
    border: '1px solid rgb(247, 247, 247)',
    "& .hidden-button": {
      display: "none"
    },
    "&:hover .hidden-button": {
      display: "flex"
    },
  },
  active: {
    border: '1px solid',
    borderColor: theme.palette.primary.main,
  },
  buttonWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.main,
    },
    marginLeft: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    width: 20,
    height: 20,
    borderRadius: '50%',
  },
  content: {
    fontSize: 'calc(10px)',
  },
  cardNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 9,
  },
  cardNumberValue: {
    fontSize: 'calc(14px)',
    fontWeight: 700,
  },
  nameOnCard: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
  }
});

export default styles;
