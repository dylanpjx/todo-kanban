import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Editable from '../helpers/Editable';
import DelTask from '../helpers/DelTask';

const useStyles = makeStyles((theme) => ({
  taskWrapper: {
    padding: theme.spacing(2),
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    right: 0,
    // float: "right",
  },
}));

const ContentComponent = ({ text }) => <Typography>{text}</Typography>;

const Task = (props) => {
  const classes = useStyles();

  return (
    <Draggable draggableId={props.task.id} index={props.index} type="task">
      {(provided, snapshot) => (
        <Paper
          variant="outlined"
          square
          className={classes.taskWrapper}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Editable
            text={props.task.content}
            // onSubmit={(text) => {}}
            ContentComponent={() => (
              <ContentComponent text={props.task.content} />
            )}
            multiline
            // initialIsEditing={props.isNew}
          />

          <DelTask
            delTask={props.delTask}
            colId={props.colId}
            taskId={props.task.id}
          />
        </Paper>
      )}
    </Draggable>
  );
};

export default Task;
