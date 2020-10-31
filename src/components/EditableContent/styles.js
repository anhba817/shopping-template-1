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
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.background.default}`,
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
  editButton: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    color: theme.palette.primary.contrastText,
    marginLeft: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    width: 20,
    height: 20,
    borderRadius: '50%',
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.main,
    },
    color: theme.palette.primary.contrastText,
    marginLeft: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    width: 20,
    height: 20,
    borderRadius: '50%',
  },
  label: {
    fontWeight: 700,
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  content: {
    fontSize: 15,
  }
});

export default styles;
