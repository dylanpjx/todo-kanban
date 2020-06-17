import React, { Component } from "react";

import Board from "./components/Board";

var _todoIndex = 0;
var _colIndex = 0;
var _boardIndex = 0;
const _initialState = {
  currBoard: 0,
  boards: [
    {
      header: "Project Name",
      id: _boardIndex++,
      cols: [
        {
          id: _colIndex++,
          label: "Todo",
          tasks: [
            {
              id: _todoIndex++,
              colNo: 0,
              task: "default 1",
            },
            { id: _todoIndex++, colNo: 0, task: "default 2" },
          ],
        },
        {
          id: _colIndex++,
          label: "Doing",
          tasks: [
            {
              id: _todoIndex++,
              colNo: 1,
              task: "default 1",
            },
            {
              id: _todoIndex++,
              colNo: 1,
              task: "default 2",
            },
          ],
        },
        {
          id: _colIndex++,
          label: "Done",
          tasks: [
            {
              id: _todoIndex++,
              colNo: 2,
              task: "default 1",
            },
            {
              id: _todoIndex++,
              colNo: 2,
              task: "default 2",
            },
          ],
        },
      ],
    },
  ],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = _initialState;
  }

  render() {
    const board = this.state.boards[this.state.currBoard];
    return <Board header={board.header} cols={board.cols} />;
  }
}

export default App;
