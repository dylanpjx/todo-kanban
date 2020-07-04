import React, { useState } from "react";

import Editable from "./helpers/Editable";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  taskWrapper: {
    padding: theme.spacing(2),
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    right: 0,
    // float: "right",
  },
}));

const Task = (props) => {
  const classes = useStyles();
  // State hook to change {text}
  const [task, setTask] = useState(props.task);

  // Delete task when {content} is empty

  return (
    <Paper variant="outlined" square className={classes.taskWrapper}>
      <Editable text={task} comp="taskText" onEdit={setTask} />
      <IconButton className={classes.button}>
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
};

export default Task;
