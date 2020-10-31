import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Zoom from "@material-ui/core/Zoom";
import styles from "./styles";

class FormDialog extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      label: "",
      value: "",
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    const { content } = this.props;
    if (content) {
      this.setState({
        value: content.value,
      });
      if (content.label) {
        this.setState({
          label: content.label,
        });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.content !== this.props.content) {
      if (this.props.content) {
        this.setState({
          value: this.props.content.value,
        });
        if (this.props.content.label) {
          this.setState({
            label: this.props.content.label,
          });
        }
      } else {
        this.setState(this.initialState);
      }
    }
  }

  handleOnChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    const { onSave, content, handleClose } = this.props;
    if (content.hasOwnProperty("label")) {
      onSave({
        id: content.id,
        label: this.state.label,
        value: this.state.value,
      });
    } else {
      onSave({ id: content.id, value: this.state.value });
    }
    handleClose();
  };

  render() {
    const { open, handleClose, type, addNew, content } = this.props;
    return (
      <Dialog
        open={open}
        TransitionComponent={Zoom}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ position: "relative" }}>
          {addNew ? `Add new ${type}` : `Edit ${type}`}
          <IconButton
            size="small"
            onClick={handleClose}
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {content.hasOwnProperty("label") ? (
            <TextField
              fullWidth
              variant="outlined"
              defaultValue={content.label}
              name="label"
              onChange={this.handleOnChange}
              style={{ marginTop: 5 }}
            />
          ) : null}
          <TextField
            fullWidth
            variant="outlined"
            defaultValue={content.value}
            name="value"
            multiline
            rowsMax={4}
            rows={4}
            onChange={this.handleOnChange}
            style={{ marginTop: 10 }}
          />
        </DialogContent>
        <DialogActions style={{ paddingLeft: 25, paddingRight: 25 }}>
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
            fullWidth
          >
            Save {type}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(FormDialog);
