import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddTask = (props) => {
  return (
    <Button
      size="small"
      startIcon={<AddIcon />}
      onClick={() => props.addTask(props.colId, 'Type your task here!')}
    >
      Add another task
    </Button>
  );
};

export default AddTask;
