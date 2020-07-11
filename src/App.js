import React, { Component } from 'react';

import Board from './components/Board';

var _todoIndex = 0;
var _colIndex = 0;
var _boardIndex = 0;

const createBoard = (header, cols, id = _boardIndex++) => {
  return { id, header, cols };
};

const createCol = (label, tasks, isNew = false, id = _colIndex++) => {
  return { id, label, tasks, isNew };
};

const createTask = (colId, content, isNew = false, id = _todoIndex++) => {
  return { id, colId, content, isNew };
};

const _initialState = {
  currBoard: 0,
  boards: [
    createBoard('Project Name', [
      createCol('Todo', [createTask(0, 'Click inside to edit.')]),
      createCol('Doing', [
        createTask(1, 'Try adding a task by clicking the button below.'),
      ]),
      createCol('Done', []),
    ]),
  ],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = _initialState;
  }
  // Board handling
  setBoards = (boards) => {
    this.setState({ boards });
  };

  updateHeader = (header) => {
    const boardId = this.state.currBoard;
    const newBoards = [...this.state.boards];
    newBoards[boardId].header = header;
    this.setBoards(newBoards);
  };

  // Col handling
  setCols = (cols) => {
    const boardId = this.state.currBoard;
    const newBoards = [...this.state.boards];
    newBoards[boardId] = { ...newBoards[boardId], cols };
    this.setBoards(newBoards);
  };

  updateLabel = (colId, label) => {
    const boardId = this.state.currBoard;
    const cols = this.state.boards[boardId].cols;
    this.setCols(
      cols.map((col) => {
        if (col.id === colId) {
          return { ...col, label };
        }
        return col;
      }),
    );
  };

  addCol = (label) => {
    const boardId = this.state.currBoard;
    const cols = this.state.boards[boardId].cols;
    const newCol = createCol(label, [], true);
    this.setCols([...cols, newCol], boardId);
  };

  delCol = (colId) => {
    const boardId = this.state.currBoard;
    const cols = this.state.boards[boardId].cols;
    this.setCols(cols.filter(({ id }) => id !== colId));
  };

  // Task handling
  setTasks = (colId, tasks) => {
    const boardId = this.state.currBoard;
    const newBoards = [...this.state.boards];
    newBoards[boardId].cols[colId].tasks = tasks;
    this.setBoards(newBoards);
  };

  updateContent = (colId, taskId, content) => {
    const boardId = this.state.currBoard;
    const tasks = this.state.boards[boardId].cols[colId].tasks;
    this.setTasks(
      colId,
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, content };
        }
        return task;
      }),
    );
  };

  addTask = (colId, content) => {
    const boardId = this.state.currBoard;
    const tasks = this.state.boards[boardId].cols[colId].tasks;
    const newTask = createTask(colId, content, true);
    this.setTasks(colId, [...tasks, newTask]);
  };

  delTask = (colId, taskId) => {
    const boardId = this.state.currBoard;
    const tasks = this.state.boards[boardId].cols[colId].tasks;
    this.setTasks(
      colId,
      tasks.filter(({ id }) => id !== taskId),
    );
  };

  render() {
    const board = this.state.boards[this.state.currBoard];

    return (
      <Board
        header={board.header}
        updateHeader={this.updateHeader}
        cols={board.cols}
        addCol={this.addCol}
        delCol={this.delCol}
        updateLabel={this.updateLabel}
        addTask={this.addTask}
        delTask={this.delTask}
        updateContent={this.updateContent}
      />
    );
  }
}

export default App;
