import React, { Component } from 'react';

import initialState from './helpers/initialState';
import Board from './components/Board';

var _taskIndex = 3;
var _colIndex = 3;
var _boardIndex = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // DnD
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    // No destination
    if (!destination) return;

    // Destination same as source
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // Handle column dragging
    if (type === 'column') {
      const colIds = this.state.boards[source.droppableId].colIds;
      colIds.splice(source.index, 1);
      colIds.splice(destination.index, 0, draggableId);
      const newBoard = { ...this.state.boards[source.draggableId], colIds };

      this.setState({
        ...this.state,
        boards: { ...this.state.boards, [newBoard.id]: newBoard },
      });
      return;
    }

    // Handle task dragging
    const startCol = this.state.cols[source.droppableId];
    const endCol = this.state.cols[destination.droppableId];

    // Within same column
    if (startCol === endCol) {
      const taskIds = startCol.taskIds;
      taskIds.splice(source.index, 1);
      taskIds.splice(destination.index, 0, draggableId);
      const newCol = { ...startCol, taskIds };

      this.setState({
        ...this.state,
        cols: { ...this.state.cols, [newCol.id]: newCol },
      });
      return;
    }
    // Across different columns
    const startTaskIds = startCol.taskIds;
    startTaskIds.splice(source.index, 1);
    const newStart = { ...startCol, startTaskIds };

    const endTaskIds = endCol.taskIds;
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEnd = { ...endCol, endTaskIds };

    this.setState({
      ...this.state,
      cols: {
        ...this.state.cols,
        [newStart.id]: newStart,
        [newEnd.id]: newEnd,
      },
    });
  };

  // Board handling
  addBoard = (header, colIds = [], id = 'board-' + _boardIndex++) => {
    const boards = { ...this.state.boards };
    boards[id] = { id, header, colIds };
    this.setState({ boards });
  };

  delBoard = (id) => {
    const boards = { ...this.state.boards };
    boards.filter((board) => board.id === id);
    this.setState({ boards });
  };

  updateHeader = (id, header) => {
    const boards = { ...this.state.boards };
    boards[id] = { ...boards[id], header };
    this.setState({ boards });
  };

  // Col handling
  addCol = (label, taskIds = [], id = 'col-' + _colIndex++) => {
    const cols = { ...this.state.cols };
    cols[id] = { id, label, taskIds };
    this.setState({ cols });

    const boards = { ...this.state.boards };
    boards[this.state.boardOrder[0]].colIds.push(id);
    this.setState({ boards });
  };

  delCol = (id) => {
    const cols = { ...this.state.cols };
    delete cols[id];
    this.setState({ cols });

    const boards = { ...this.state.boards };
    boards[this.state.boardOrder[0]].colIds.filter((colId) => colId === id);
  };

  updateLabel = (id, label) => {
    const cols = { ...this.state.cols };
    cols[id] = { ...cols[id], label };
    this.setState({ cols });
  };

  // Task handling
  addTask = (colId, content, id = 'task-' + _taskIndex++) => {
    const tasks = { ...this.state.tasks };
    tasks[id] = { id, content };
    this.setState({ tasks });

    const cols = { ...this.state.cols };
    cols[colId].taskIds.push(id);
    this.setState({ cols });
  };

  delTask = (colId, id) => {
    const tasks = { ...this.state.tasks };
    delete tasks[id];
    this.setState({ tasks });

    const cols = { ...this.state.cols };
    cols[colId].taskIds.filter((taskId) => taskId === id);
    this.setState({ cols });
  };

  updateContent = (id, content) => {
    const tasks = { ...this.state.tasks };
    tasks[id] = { ...tasks[id], content };
    this.setState({ tasks });
  };

  render() {
    const board = this.state.boards[this.state.boardOrder[0]];
    console.log('board: ', board);

    return (
      <Board
        board={board}
        updateHeader={this.updateHeader}
        // addBoard={this.addBoard}
        // delBoard={this.delBoard}

        cols={this.state.cols}
        addCol={this.addCol}
        delCol={this.delCol}
        updateLabel={this.updateLabel}
        tasks={this.state.tasks}
        addTask={this.addTask}
        delTask={this.delTask}
        updateContent={this.updateContent}
        onDragEnd={this.onDragEnd}
      />
    );
  }
}

export default App;
