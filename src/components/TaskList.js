import React, { useState } from "react";

import Editable from "./Editable";
import Task from "./Task";

const TaskList = (props) => {
  return (
    <div className="">
      <div className="subtitle">
        <Editable text={props.label} type="text" />
      </div>
      {props.tasks.map((task) => (
        <div key={task.id}>
          <Task id={task.id} colNo={task.colNo} content={task.content} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
