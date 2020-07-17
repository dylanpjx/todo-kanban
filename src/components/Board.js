import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import AddCol from '../helpers/AddCol';
import Header from './Header';
import Col from './Col';

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'no-wrap',
    padding: `0px ${theme.spacing(2)}px`,
  },
}));

const Board = (props) => {
  const classes = useStyles();

  return (
    <DragDropContext onDragEnd={props.onDragEnd} className={classes.root}>
      <Header header={props.board.header} updateHeader={props.updateHeader} />

      <Droppable
        droppableId={props.board.id}
        direction="horizontal"
        type="column"
      >
        {(provided) => (
          <Grid
            container
            spacing={3}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.board.colIds.map((colId, index) => {
              const col = props.cols[colId];
              if (col) {
                return (
                  <Grid item xs={3}>
                    <Col
                      key={col.id}
                      col={col}
                      delCol={props.delCol}
                      index={index}
                      tasks={props.tasks}
                      addTask={props.addTask}
                      delTask={props.delTask}
                    />
                  </Grid>
                );
              }
            })}
            {provided.placeholder}

            <Grid item xs={3}>
              <AddCol addCol={props.addCol} />
            </Grid>
          </Grid>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
