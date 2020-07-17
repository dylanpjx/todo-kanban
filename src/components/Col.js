import React from 'react';

import { Draggable, Droppable } from 'react-beautiful-dnd';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import ColMenu from '../helpers/ColMenu';
import Editable from '../helpers/Editable';
import Task from './Task';
import AddTask from '../helpers/AddTask';

const useStyles = makeStyles((theme) => ({
  col: {},
  add: {
    padding: theme.spacing(2, 1),
    borderRadius: theme.spacing(2),
  },
  labelWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
}));

const ContentComponent = ({ text }) => <Typography> {text} </Typography>;

const Col = (props) => {
  const classes = useStyles();

  // console.log(`Col ${props.id}: props.task:`, props.tasks);

  return (
    <Draggable draggableId={props.col.id} index={props.index} type="column">
      {(provided) => (
        <Card
          className={classes.col}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          {/* Label + Menu */}
          <div className={classes.labelWrapper} {...provided.dragHandleProps}>
            <Editable
              text={props.label}
              // onSubmit={(text) => }
              // initialIsEditing={props.isNew}
              ContentComponent={() => (
                <ContentComponent text={props.col.label} />
              )}
            />

            <ColMenu colId={props.col.id} delCol={props.delCol} />
          </div>

          {/* Tasks */}
          <Droppable droppableId={props.col.id} type="task">
            {(provided, snapshot) => (
              <CardContent
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {props.col.taskIds.map((taskId, index) => {
                  const task = props.tasks[taskId];
                  if (task) {
                    return (
                      <Task
                        key={task.id}
                        colId={props.col.id}
                        task={task}
                        index={index}
                        delTask={props.delTask}
                      />
                    );
                  }
                })}
                {provided.placeholder}
              </CardContent>
            )}
          </Droppable>

          {/* AddTask Button */}
          <CardActions>
            <AddTask
              className={classes.add}
              colId={props.col.id}
              addTask={props.addTask}
            />
          </CardActions>
        </Card>
      )}
    </Draggable>
  );
};

export default Col;
