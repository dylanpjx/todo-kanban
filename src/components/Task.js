import React, { useState } from 'react';

import { Draggable } from 'react-beautiful-dnd';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Editable from '../helpers/Editable';
import DelTask from '../helpers/DelTask';

const useStyles = makeStyles((theme) => ({
  task: {
    backgroundColor: 'rgb(255, 253, 246)',
    display: 'flex',
    justifyContent: 'space-between',
    // padding: '12px',
    position: 'relative',

    '&:hover': {
      backgroundColor: '#f5f2f0',
    },
  },
}));

const ContentComponent = ({ text }) => (
  <Typography style={{ padding: 5.5, wordWrap: 'word-break' }}>
    {text}
  </Typography>
);

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
            ContentComponent={() => (
              <ContentComponent text={props.task.content} />
            )}
            setButtonVis={setButtonVis}
            multiline
            styleProps={{
              padding: '2.5px',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '1.5',
              width: '246px',
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
