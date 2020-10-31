const styles = (theme) => ({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {},
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 400,
    maxHeight: 400,
  },
  image: {
    position: "relative",
    width: 70,
    height: 70,
    border: "1px solid grey",
    margin: 5,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  active: {
    border: "2px solid",
    borderColor: theme.palette.primary.main,
  },
});

export default styles;
