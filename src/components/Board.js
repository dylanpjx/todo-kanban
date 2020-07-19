import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import AddCol from '../helpers/AddCol';
import Header from './Header';
import Col from './Col';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'no-wrap',
  },
  colWrapper: {
    display: 'flex',
    margin: '20px',
  },
}));

const Board = (props) => {
  const classes = useStyles();

  return (
    <DragDropContext onDragEnd={props.onDragEnd} className={classes.root}>
      <Header
        boardId={props.board.id}
        header={props.board.header}
        updateHeader={props.updateHeader}
      />

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
                    updateLabel={props.updateLabel}
                    index={index}
                    tasks={props.tasks}
                    addTask={props.addTask}
                    delTask={props.delTask}
                    updateContent={props.updateContent}
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
