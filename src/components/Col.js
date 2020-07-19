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
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '50px',
    width: '270px',
    margin: '0px 15px',
  },
  labelWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
          {...provided.dragHandleProps}
        >
          {/* Label + Menu */}
          <div className={classes.labelWrapper}>
            <Editable
              text={props.label}
              onSubmit={(text) => props.updateLabel(props.col.id, text)}
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
                className={classes.taskWrapper}
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
                        updateContent={props.updateContent}
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
