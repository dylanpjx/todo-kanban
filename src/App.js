import React, { Component } from 'react';

import initialState from './components/helpers/initialState';
import Board from './components/Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  // Board handling
  setBoards = (boards) => {
    console.log('new', boards);
    this.setState({ boards });
  };

  updateHeader = (header) => {
    const boardId = this.state.currBoard;
    const boards = [...this.state.boards];

    this.setBoards(
      boards.map((board) => {
        if (board.id === boardId) {
          return { ...board, header };
        }
        return { board };
      }),
    );
  };

  // Col handling
  setCols = (cols) => {
    const boardId = this.state.currBoard;
    const boards = [...this.state.boards];

    this.setBoards(
      boards.map((board) => {
        if (board.id === boardId) {
          return { ...board, cols };
        }
        return { board };
      }),
    );
  };

  updateLabel = (colId, label) => {
    const boardId = this.state.currBoard;
    const boards = [...this.state.boards];
    const board = boards.find((board) => board.id === boardId);
    const cols = board.cols;

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
    const boards = [...this.state.boards];
    const board = boards.find((board) => board.id === boardId);
    const cols = board.cols;

    const newCol = createCol(label, [], true);
    this.setCols([...cols, newCol], boardId);
  };

  delCol = (colId) => {
    const boardId = this.state.currBoard;
    const boards = [...this.state.boards];
    const board = boards.find((board) => board.id === boardId);
    const cols = board.cols;

    this.setCols(cols.filter(({ id }) => id !== colId));
  };

  // Task handling
  setTasks = (colId, tasks) => {
    const boardId = this.state.currBoard;
    const boards = [...this.state.boards];
    const board = boards.find((board) => board.id === boardId);
    const cols = board.cols;

    this.setCols(
      cols.map((col) => {
        if (col.id === colId) {
          return { ...col, tasks };
        }
        return col;
      }),
    );
  };

  // this should be called only if you commit the edit
  updateContent = (colId, taskId, content) => {
    const boardId = this.state.currBoard;
    const boards = [...this.state.boards];
    const board = boards.find((board) => board.id === boardId);
    const col = board.cols.find((col) => col.id === colId);
    const tasks = col.tasks;

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
    const boards = [...this.state.boards];
    const board = boards.find((board) => board.id === boardId);
    const col = board.cols.find((col) => col.id === colId);
    const tasks = col.tasks;

    const newTask = createTask(colId, content, true);
    this.setTasks(colId, [...tasks, newTask]);
  };

  delTask = (colId, taskId) => {
    const boardId = this.state.currBoard;
    const boards = [...this.state.boards];
    const board = boards.find((board) => board.id === boardId);
    const col = board.cols.find((col) => col.id === colId);
    const tasks = col.tasks;

    console.log('old', boards);

    this.setTasks(
      colId,
      tasks.filter(({ id }) => id !== taskId),
    );
  };

  render() {
    const board = this.state.boards.find(
      (board) => board.id === this.state.currBoard,
    );

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
