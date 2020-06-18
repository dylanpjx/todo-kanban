import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Editable from "./helpers/Editable";
import Task from "./Task";

const useStyles = makeStyles((theme) => ({
  col: {},
  add: {
    padding: theme.spacing(2, 1),
    borderRadius: theme.spacing(2),
  },
  menu: {
    float: "right",
  },
}));

const Col = (props) => {
  const classes = useStyles();

  const [label, setLabel] = useState(props.label);
  const [menu, setMenu] = useState(null);

  return (
    <Paper className={classes.col}>
      <Editable text={label} type="text" onEdit={setLabel} />

      <IconButton
        onClick={(e) => setMenu(e.currentTarget)}
        className={classes.menu}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="col-menu"
        anchorEl={menu}
        keepMounted
        open={Boolean(menu)}
        onClose={() => setMenu(null)}
      >
        <MenuItem onClick={() => setMenu(null)}>Copy Column</MenuItem>
        <MenuItem onClick={() => setMenu(null)}>Delete Column</MenuItem>
        <MenuItem onClick={() => setMenu(null)}>Move Column</MenuItem>
      </Menu>

      {props.tasks.map((task) => (
        <div key={task.id}>
          <Task
            id={task.id}
            colNo={task.colNo}
            task={task.task}
            addTask={props.addTask}
            deleteTask={props.deleteTask}
          />
        </div>
      ))}

      <Button size="small" startIcon={<AddIcon />} className={classes.add}>
        Add another task
      </Button>
    </Paper>
  );
};

export default Col;
