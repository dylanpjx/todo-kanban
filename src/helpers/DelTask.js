import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  delTask: {
    border: '',
    padding: '',
    position: 'absolute',
    right: '0',
  },
}));

const DelTask = (props) => {
  const classes = useStyles();

  return (
    <div>
      <IconButton
        className={classes.delTask}
        onClick={() => props.delTask(props.colId, props.taskId)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default DelTask;
