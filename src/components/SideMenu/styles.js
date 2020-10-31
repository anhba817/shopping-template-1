const styles = (theme) => ({
  productSideMenu: {
    width: 280,
    color: theme.palette.primary.main,
  },
  menu: {
    fontFamily: theme.typography.fontFamily,
    textTransform: 'none',
    fontSize: 16,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.typography.color,
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
    },
  },
  item: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 14,
    color: theme.typography.color,
  },
});

export default styles;
