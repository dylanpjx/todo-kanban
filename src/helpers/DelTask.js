import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  delTask: {
    position: 'absolute',
    right: '0px',
    '&:hover': {
      backgroundColor: 'rgba(236, 232, 217, 0.6)',
    },
  },
}));

const DelTask = (props) => {
  const classes = useStyles();

  return (
    <div>
      <IconButton
        size="small"
        className={classes.delTask}
        style={{
          borderRadius: '0px',
        }}
        onClick={() => props.delTask(props.colId, props.taskId)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default DelTask;
