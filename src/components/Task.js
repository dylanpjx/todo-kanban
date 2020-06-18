import React, { useState } from "react";

import Editable from "./helpers/Editable";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  task: {
    padding: theme.spacing(2, 1),
  },
  button: {
    float: "right",
  },
}));

const Task = (props) => {
  const classes = useStyles();
  // State hook to change {text}
  const [task, setTask] = useState(props.task);

  // Delete task when {content} is empty

  return (
    <Card className={classes.task}>
      <Editable text={task} type="text" onEdit={setTask} />

      <IconButton className={classes.button}>
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};

export default Task;
