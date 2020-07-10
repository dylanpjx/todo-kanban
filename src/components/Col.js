import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import AddTask from './helpers/AddTask';
import Editable from './helpers/Editable';
import Task from './Task';

const useStyles = makeStyles((theme) => ({
  col: {},
  add: {
    padding: theme.spacing(2, 1),
    borderRadius: theme.spacing(2),
  },
  labelMenu: {
    position: 'absolute',
    right: 0,
  },
  labelWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
}));

const Col = (props) => {
  const classes = useStyles();

  const [label, setLabel] = useState(props.label);
  const [menu, setMenu] = useState(null);

  console.log(`Col ${props.id}: props.task:`, props.tasks);

  return (
    <Card className={classes.col}>
      {/* Label */}
      <div className={classes.labelWrapper}>
        <Editable
          text={props.label}
          type="col"
          onEdit={props.updateCol}
          initialIsEditing={props.isNew}
          colId={props.id}
        />

        {/* Context menu */}
        <IconButton
          onClick={(e) => setMenu(e.currentTarget)}
          className={classes.labelMenu}
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
          <MenuItem onClick={() => props.delCol(props.id)}>
            Delete Column
          </MenuItem>
          <MenuItem onClick={() => setMenu(null)}>Move Column</MenuItem>
        </Menu>
      </div>

      {/* Tasks */}
      <CardContent>
        {props.tasks.map((task) => (
          <div key={task.id}>
            <Task
              id={task.id}
              colId={task.colId}
              content={task.content}
              isNew={task.isNew}
              delTask={props.delTask}
              updateTask={props.updateTask}
            />
          </div>
        ))}
      </CardContent>

      {/* AddTask Button */}
      <CardActions>
        <AddTask
          className={classes.add}
          colId={props.id}
          addTask={props.addTask}
        />
      </CardActions>
    </Card>
  );
};

export default Col;
