import React, { useState } from 'react';

import { Draggable } from 'react-beautiful-dnd';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Editable from '../helpers/Editable';
import DelTask from '../helpers/DelTask';

const useStyles = makeStyles((theme) => ({
  task: {
    display: 'flex',
    backgroundColor: 'rgb(255, 253, 246)',
    justifyContent: 'space-between',
    position: 'relative',
    '&:hover': {
      backgroundColor: '#f5f2f0',
    },
  },
}));

const Task = (props) => {
  const classes = useStyles(props);
  const [buttonVis, setButtonVis] = useState(false);

  return (
    <Draggable draggableId={props.task.id} index={props.index} type="task">
      {(provided, snapshot) => (
        <Paper
          variant="outlined"
          square
          className={classes.task}
          onMouseEnter={() => setButtonVis(true)}
          onMouseLeave={() => setButtonVis(false)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* Task */}
          <Editable
            text={props.task.content}
            onSubmit={(text) => props.updateContent(props.task.id, text)}
            onExitIfEmpty={() => {
              if (props.task.isNew) props.delTask(props.colId, props.task.id);
            }}
            initIsEditing={props.task.isNew}
            multiline
            styleProps={{
              padding: '2.5px',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '1.5',
              width: '230px',
            }}
          />
          {/* DelTask Button */}
          {buttonVis && !snapshot.isDragging && (
            <DelTask
              delTask={props.delTask}
              colId={props.colId}
              taskId={props.task.id}
            />
          )}
        </Paper>
      )}
    </Draggable>
  );
};

export default Task;
