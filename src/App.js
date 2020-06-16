import React, { Component } from "react";

import Header from "./components/Header";
import TaskList from "./components/TaskList";

import "bulma/css/bulma.css";
import "./App.css";

var _todoIndex = 0;
var _colIndex = 0;
const _initialState = {
  header: "Change the header here!",
  taskLists: [
    {
      id: _colIndex++,
      label: "Todo",
      tasks: [
        {
          id: _todoIndex++,
          colNo: 0,
          content: "default 1",
        },
        { id: _todoIndex++, colNo: 0, content: "default 2" },
      ],
    },
    {
      id: _colIndex++,
      label: "Doing",
      tasks: [
        {
          id: _todoIndex++,
          colNo: 1,
          content: "default 1",
        },
        {
          id: _todoIndex++,
          colNo: 1,
          content: "default 2",
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
          content: "default 1",
        },
        {
          id: _todoIndex++,
          colNo: 2,
          content: "default 2",
        },
      ],
    },
  ],
};

class App extends Component {
  constructor(props) {
    super(props);

    // Pull from localStorage, else set default state
    if (localStorage.getItem("cols")) {
      this.state = {
        cols: JSON.parse(localStorage.getItem("cols")),
      };
    } else {
      this.state = _initialState;
    }
  }

  // Slave functions for col handling
  addCol = (id, label, tasks) => {
    return { id, label, tasks };
  };

  deleteCol = (id) => {};

  // Slave functions for task handling
  addTask = (id, colNo, content) => {
    let col = this.state.find((obj) => obj.id === colNo);
    col.push({ id: id, colNo: colNo, content: content });
    return { id, colNo, content };
  };

  deleteTask = (id) => {};

  render() {
    return (
      <div className="wrapper">
        <div className="header box">
          <Header header={this.state.header} />
        </div>
        <div className="columns">
          {this.state.taskLists.map((taskList) => (
            <div className="taskList column box" key={taskList.id}>
              <TaskList
                id={taskList.id}
                label={taskList.label}
                tasks={taskList.tasks}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
