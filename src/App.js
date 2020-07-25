import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import initialState from './helpers/initialState';
import Board from './components/Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = localStorage.getItem('state')
      ? JSON.parse(localStorage.getItem('state'))
      : initialState;
  }
  componentDidUpdate = () => {
    console.log('Saved', this.state);
    localStorage.setItem('state', JSON.stringify(this.state));
  };

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
      localStorage.setItem('state', JSON.stringify(this.state));
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
      localStorage.setItem('state', JSON.stringify(this.state));
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
    return;
  };

  // Board handling
  addBoard = (header, colIds = [], id = 'board-' + uuidv4()) => {
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
  addCol = (label, taskIds = [], isNew = true, id = 'col-' + uuidv4()) => {
    const cols = { ...this.state.cols };
    cols[id] = { id, label, isNew, taskIds };
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
    this.setState({ boards });
  };

  // copyCol = (id) => {
  //   const cols = { ...this.state.cols };
  //   const col = cols[id];
  //   console.log(col, col.label, col.taskIds);
  //   this.addCol(col.label, col.taskIds);
  // };

  updateLabel = (id, label) => {
    const cols = { ...this.state.cols };
    cols[id] = { ...cols[id], label, isNew: false };
    this.setState({ cols });
  };

  // Task handling
  addTask = (colId, content, isNew = true, id = 'task-' + uuidv4()) => {
    const tasks = { ...this.state.tasks };
    tasks[id] = { id, content, isNew };
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
    tasks[id] = { ...tasks[id], content, isNew: false };
    this.setState({ tasks });
  };

  render() {
    const board = this.state.boards[this.state.boardOrder[0]];

    return (
      <Board
        boards={this.state.boards}
        board={board}
        updateHeader={this.updateHeader}
        // addBoard={this.addBoard}
        // delBoard={this.delBoard}
        cols={this.state.cols}
        addCol={this.addCol}
        delCol={this.delCol}
        // copyCol={this.copyCol}
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
