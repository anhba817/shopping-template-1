import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import uniqid from 'uniqid';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import styles from "./styles";
import EditableContentRadio from "../EditableContentRadio/index";
import EditableContent from "../EditableContent/index";
import FormDialog from '../FormDialog/index';

class EditableInfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddDialog: false,
    };
  }

  handleAddNewItem = (item) => {
    const { handleAdd } = this.props;
    handleAdd(item);
    this.setState({ openAddDialog: false })
  }

  render() {
    const {
      classes,
      number,
      name,
      label,
      className,
      editable,
      deletable,
      contents,
      handleDeleteItem,
      handleEditItem,
      carousel,
    } = this.props;
    const { openAddDialog } = this.state;
    return (
      <Card className={clsx(classes.container, className)}>
        <div className={classes.header}>
          <span className={classes.counter}>{number}</span>
          <span className={classes.title}>{label}</span>
        </div>
        <EditableContentRadio carousel={carousel}>
          {contents.map((content) => (
            <EditableContent
              className={clsx({
                [classes.editableContent]: !carousel,
                [classes.editableCarouselContent]: carousel,
              })}
              editable={editable}
              deletable={deletable}
              content={content}
              key={content.id}
              handleDeleteItem={handleDeleteItem}
              type={name}
              onEditContent={handleEditItem}
            />
          ))}
        </EditableContentRadio>
        {editable || deletable ? (
          <Button
            startIcon={<AddIcon />}
            onClick={() => this.setState({ openAddDialog: true })}
            className={classes.addButton}
          >
            Add {name}
          </Button>
        ) : null}
        <FormDialog
          open={openAddDialog}
          type={name}
          content={
            contents[0].hasOwnProperty("label")
              ? { id: uniqid(), label: "", value: "" }
              : { id: uniqid(), value: "" }
          }
          handleClose={() => this.setState({ openAddDialog: false })}
          onSave={this.handleAddNewItem}
          addNew
        />
      </Card>
    );
  }
}

export default withStyles(styles)(EditableInfoCard);
