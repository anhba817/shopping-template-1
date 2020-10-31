const styles = (theme) => ({
  menuContainer: {
    paddingTop: 6,
  },
  iconActive: {
    color: theme.palette.primary.main,
  },
  menuButton: {
    color: theme.palette.primary.main,
    textTransform: 'none',
  },
  buttonText: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 16,
  },
  hiddenContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default styles;
