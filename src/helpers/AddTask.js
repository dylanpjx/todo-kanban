import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  addTask: {
    border: '',
    padding: '',
    position: 'relative',
  },
}));

const AddTask = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.addTask}
      size="small"
      startIcon={<AddIcon />}
      onClick={() => props.addTask(props.colId, '')}
    >
      Add another task
    </Button>
  );
};

export default AddTask;
