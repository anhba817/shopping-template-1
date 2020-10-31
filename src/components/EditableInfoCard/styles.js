const styles = (theme) => ({
  container: {
    padding: '30px 30px 20px',
    position: 'relative',
    marginBottom: 20,
    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 16px 0px',
  },
  header: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 21,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.secondary.main,
    lineHeight: 1.2,
    marginBottom: 35,
    display: 'flex',
    alignItems: 'center',
  },
  counter: {
    fontSize: 19,
    width: 35,
    height: 35,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    marginRight: 15,
    color: theme.palette.primary.contrastText,
  },
  addButton: {
    position: 'absolute',
    top: 40,
    right: 30,
    padding: 0,
    textTransform: 'capitalize',
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeight,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  editableContent: {
    flex: '1 1 calc(33.3333% - 16px)',
    maxWidth: 'calc(33.3333% - 16px)',
    margin: 8,
  },
  editableCarouselContent: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.light,
  }
});

export default styles;
