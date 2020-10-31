const styles = (theme) => ({
  container: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: 15,
    fontWeight: theme.typography.fontWeight,
    borderRadius: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default styles;