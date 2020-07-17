import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const DelTask = (props) => {
  return (
    <div>
      <IconButton
        // className={classes.button}
        onClick={() => props.delTask(props.colId, props.taskId)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default DelTask;
