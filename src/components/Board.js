import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import AddCol from '../helpers/AddCol';
import Header from './Header';
import Col from './Col';

const useStyles = makeStyles((theme) => ({
  board: {
    marginTop: '70px',
  },
  colWrapper: {
    display: 'flex',
    margin: '0px 20px',
  },
}));

const Board = (props) => {
  const classes = useStyles();

  return (
    <DragDropContext onDragEnd={props.onDragEnd}>
      <div className={classes.board}>
        {/* Header */}
        <Header
          boards={props.boards}
          boardId={props.board.id}
          header={props.board.header}
          updateHeader={props.updateHeader}
        />

        {/* Columns */}
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
                const col = props.cols[colId];
                if (col) {
                  return (
                    <Col
                      key={col.id}
                      col={col}
                      delCol={props.delCol}
                      copyCol={props.copyCol}
                      updateLabel={props.updateLabel}
                      index={index}
                      tasks={props.tasks}
                      addTask={props.addTask}
                      delTask={props.delTask}
                      updateContent={props.updateContent}
                    />
                  );
                }
                return null;
              })}
              {provided.placeholder}

              {/* AddCol Button */}
              <AddCol addCol={props.addCol} />
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Board;
