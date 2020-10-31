import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { SketchPicker } from "react-color";
import ImageUploading from "react-images-uploading";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as appearanceActions from "../../actions/appearance";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import styles from "./styles";

class AppearanceEditor extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      anchorEl: null,
      editting: null,
      openColorPicker: false,
      images: [],
      logoImages: [],
      logotext: this.props.appearance.logo.text,
    };
    this.state = this.initialState;
  }

  handleColorButtonClick = (event, edittingItem) => {
    const { appearance } = this.props;
    if (edittingItem.endsWith("Color")) {
      this.setState({ color: appearance[edittingItem] });
    }
    this.setState({
      editting: edittingItem,
      openColorPicker: true,
      anchorEl: event.target,
    });
  };

  handleChangeComplete = (color) => {
    const { appearanceActionCreators } = this.props;
    const { editting } = this.state;
    switch (editting) {
      case "primaryColor":
        appearanceActionCreators.changePrimaryColor(color.hex);
        break;
      case "contrastTextColor":
        appearanceActionCreators.changeContrastTextColor(color.hex);
        break;
      case "primaryTextColor":
        appearanceActionCreators.changePrimaryTextColor(color.hex);
        break;
      case "secondaryTextColor":
        appearanceActionCreators.changeSecondaryTextColor(color.hex);
        break;
      default:
        break;
    }
  };

  closeColorPicker = () => {
    this.setState({ openColorPicker: false });
  };

  onChangeImage = (imageList) => {
    console.log(imageList);
    this.setState({ images: imageList });
    const { appearanceActionCreators } = this.props;
    appearanceActionCreators.changeHomeBackgroundImage(imageList[0]);
  };

  onChangeLogoImage = (imageList) => {
    console.log(imageList);
    this.setState({ logoImages: imageList });
    const { appearanceActionCreators } = this.props;
    appearanceActionCreators.changeLogoImage(imageList[0]);
  };

  handleChangeLogoState = () => {
    const { appearanceActionCreators } = this.props;
    appearanceActionCreators.toggleLogoUseTextOnly();
  };

  handleChange = (event) => {
    const name = event.target.name;
    const { appearanceActionCreators } = this.props;
    if (name === "logotext") {
      this.setState({ logotext: event.target.value });
      appearanceActionCreators.changeLogoTextRequest(event.target.value);
    }
  };

  render() {
    const { classes, appearance } = this.props;
    const {
      anchorEl,
      openColorPicker,
      editting,
      images,
      logoImages,
      logotext,
    } = this.state;
    return (
      <>
        <Typography variant="h5">COLORS</Typography>
        <Grid container spacing={1} style={{ margin: 10 }}>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <Typography variant="body1">Primary:</Typography>
            <Button
              variant="outlined"
              style={{
                width: 24,
                minWidth: 24,
                height: 24,
                borderRadius: 12,
                backgroundColor: appearance.primaryColor,
              }}
              onClick={(event) =>
                this.handleColorButtonClick(event, "primaryColor")
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <Typography variant="body1">Contrast text:</Typography>
            <Button
              variant="outlined"
              style={{
                width: 24,
                minWidth: 24,
                height: 24,
                borderRadius: 12,
                backgroundColor: appearance.contrastTextColor,
              }}
              onClick={(event) =>
                this.handleColorButtonClick(event, "contrastTextColor")
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <Typography variant="body1">Primary text:</Typography>
            <Button
              variant="outlined"
              style={{
                width: 24,
                minWidth: 24,
                height: 24,
                borderRadius: 12,
                backgroundColor: appearance.primaryTextColor,
              }}
              onClick={(event) =>
                this.handleColorButtonClick(event, "primaryTextColor")
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <Typography variant="body1">Secondary text:</Typography>
            <Button
              variant="outlined"
              style={{
                width: 24,
                minWidth: 24,
                height: 24,
                borderRadius: 12,
                backgroundColor: appearance.secondaryTextColor,
              }}
              onClick={(event) =>
                this.handleColorButtonClick(event, "secondaryTextColor")
              }
            />
          </Grid>
        </Grid>
        <Typography variant="h5">IMAGES</Typography>
        <Grid container spacing={1} style={{ margin: 10 }}>
          <Grid item xs={4} className={classes.gridItem}>
            <Typography variant="body1">Background:</Typography>
          </Grid>
          <Grid item xs={8} className={classes.gridItem}>
            <ImageUploading
              value={images}
              onChange={this.onChangeImage}
              maxNumber={1}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    className={clsx({
                      [classes.backgroundButton]: imageList.length <= 0,
                      [classes.imageButton]: imageList.length > 0,
                    })}
                    style={isDragging ? { color: "red" } : null}
                    onClick={() => onImageUpdate(0)}
                    {...dragProps}
                  >
                    {imageList.length > 0 ? (
                      <img
                        src={imageList[0].data_url}
                        alt=""
                        style={{ maxHeight: 60, maxWidth: 100 }}
                      />
                    ) : (
                      "Click or Drop here"
                    )}
                  </Button>
                  {imageList.length > 0 ? (
                    <div style={{ marginLeft: 10, flex: 1 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        size="small"
                        onClick={onImageRemoveAll}
                      >
                        Remove
                      </Button>
                      <Button fullWidth variant="outlined" size="small">
                        Save
                      </Button>
                    </div>
                  ) : null}
                </div>
              )}
            </ImageUploading>
          </Grid>
          <Grid item xs={4} className={classes.gridItemText}>
            <Typography variant="body1">Logo:</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={appearance.logo.useText}
                  onChange={this.handleChangeLogoState}
                  name="logoUseTextOnly"
                  color="primary"
                  size="small"
                />
              }
              label="Text only"
              labelPlacement="top"
              classes={{
                label: classes.logoSwitchLabel,
              }}
            />
          </Grid>
          <Grid item xs={8} className={classes.gridItem}>
            {appearance.logo.useText ? (
              <TextField
                id="outlined-basic"
                label="Your shop name"
                variant="outlined"
                name="logotext"
                onChange={this.handleChange}
                value={logotext}
              />
            ) : (
              <ImageUploading
                value={logoImages}
                onChange={this.onChangeLogoImage}
                maxNumber={1}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      className={clsx({
                        [classes.backgroundButton]: imageList.length <= 0,
                        [classes.imageButton]: imageList.length > 0,
                      })}
                      style={isDragging ? { color: "red" } : null}
                      onClick={() => onImageUpdate(0)}
                      {...dragProps}
                    >
                      {imageList.length > 0 ? (
                        <img
                          src={imageList[0].data_url}
                          alt=""
                          style={{ maxHeight: 60, maxWidth: 100 }}
                        />
                      ) : (
                        "Click or Drop here"
                      )}
                    </Button>
                    {imageList.length > 0 ? (
                      <div style={{ marginLeft: 10, flex: 1 }}>
                        <Button
                          fullWidth
                          variant="outlined"
                          size="small"
                          onClick={onImageRemoveAll}
                        >
                          Remove
                        </Button>
                        <Button fullWidth variant="outlined" size="small">
                          Save
                        </Button>
                      </div>
                    ) : null}
                  </div>
                )}
              </ImageUploading>
            )}
          </Grid>
        </Grid>
        <Popover
          open={openColorPicker}
          anchorEl={anchorEl}
          onClose={this.closeColorPicker}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <SketchPicker
            color={appearance[editting]}
            onChangeComplete={this.handleChangeComplete}
          />
        </Popover>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appearance: state.appearance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appearanceActionCreators: bindActionCreators(appearanceActions, dispatch),
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(AppearanceEditor);
