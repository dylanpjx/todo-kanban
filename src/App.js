import React, { Component } from "react";

import Board from "./components/Board";

var _todoIndex = 0;
var _colIndex = 0;
var _boardIndex = 0;

const createBoard = (id, header, cols) => {
  return { id, header, cols };
};

const createCol = (id, label, tasks) => {
  return { id, label, tasks };
};

const createTask = (id, colNo, task) => {
  return { id, colNo, task };
};

const _initialState = {
  currBoard: 0,
  boards: [
    createBoard(_boardIndex++, "Project Name", [
      createCol(_colIndex++, "Todo", [
        createTask(_todoIndex++, 0, "Click inside to edit."),
      ]),
      createCol(_colIndex++, "Doing", [
        createTask(_todoIndex++, 1, "Try adding a task below."),
      ]),
      createCol(_colIndex++, "Done", []),
    ]),
  ],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = _initialState;
  }

  // Board handling
  setBoards = (boards) => {};

  // Col handling
  setCols = (cols) => {};

  // Task handling
  setTasks = (tasks) => {
    this.setState({});
  };

  // addTask = (newTask) => setTasks((prev) => [...prev, createTask(newTask)]);
  //
  // removeTask = (taskId) =>
  //   setTasks((prev) => prev.filter(({ id }) => id != taskId));

  render() {
    const board = this.state.boards[this.state.currBoard];
    return <Board header={board.header} cols={board.cols} />;
  }
}

export default App;
