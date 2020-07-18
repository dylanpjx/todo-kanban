import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import AddCol from '../helpers/AddCol';
import Header from './Header';
import Col from './Col';

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'no-wrap',
    padding: `0px ${theme.spacing(2)}px`,
  },
  colWrapper: {
    display: 'flex',
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
          <div
            className={classes.colWrapper}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.board.colIds.map((colId, index) => {
              console.log('index:', index);
              const col = props.cols[colId];
              if (col) {
                return (
                  <Col
                    key={col.id}
                    col={col}
                    delCol={props.delCol}
                    index={index}
                    tasks={props.tasks}
                    addTask={props.addTask}
                    delTask={props.delTask}
                  />
                );
              }
            })}
            {provided.placeholder}

            <AddCol addCol={props.addCol} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
