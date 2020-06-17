import React, { useState } from "react";

import Editable from "./helpers/Editable";
import Task from "./Task";

const Col = (props) => {
  const [label, setLabel] = useState(props.label);

  return (
    <div>
      <Editable text={label} type="text" editFunc={setLabel} />

      {props.tasks.map((task) => (
        <div key={task.id}>
          <Task
            id={task.id}
            colNo={task.colNo}
            task={task.task}
            addTask={props.addTask}
            deleteTask={props.deleteTask}
          />
        </div>
      ))}
    </div>
  );
};

export default Col;
