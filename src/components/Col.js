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
    backgroundColor: 'rgb(243.6, 241.2, 232.2)',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '270px',
    margin: '0px 15px',
  },
  labelWrapper: {
    display: 'flex',
    height: '44px',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: 'rgb(236, 232, 217)',
    },
  },
  taskWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ContentComponent = ({ text }) => (
  <Typography style={{ padding: '12px' }} variant="h6">
    {text}
  </Typography>
);

const Col = (props) => {
  const classes = useStyles();

  return (
    <Draggable draggableId={props.col.id} index={props.index} type="column">
      {(provided) => (
        <div>
          <Card
            className={classes.col}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            {/* Label + Menu */}
            <div className={classes.labelWrapper} {...provided.dragHandleProps}>
              <Editable
                text={props.col.label}
                onSubmit={(text) => props.updateLabel(props.col.id, text)}
                onExitIfEmpty={() => {
                  if (props.col.isNew) props.delCol(props.col.id);
                }}
                initIsEditing={props.col.isNew}
                // inputStyle={classes.inputStyle}
                ContentComponent={() => (
                  <ContentComponent text={props.col.label} />
                )}
                styleProps={{
                  padding: '10px',
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  lineHeight: '1.6',
                }}
              />

              <ColMenu
                colId={props.col.id}
                delCol={props.delCol}
                copyCol={props.copyCol}
              />
            </div>

            {/* Tasks */}
            <Droppable droppableId={props.col.id} type="task">
              {(provided) => (
                <CardContent
                  {...provided.droppableProps}
                  ref={provided.innerRef}
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
                    return null;
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
        </div>
      )}
    </Draggable>
  );
};

export default Col;
