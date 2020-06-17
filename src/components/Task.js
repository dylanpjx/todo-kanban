import React, { useState } from "react";

import Editable from "./helpers/Editable";

import Card from "@material-ui/core/Card";

const Task = (props) => {
  // State hook to change {text}
  const [task, setTask] = useState(props.task);

  // Delete task when {content} is empty

  return (
    <Card>
      <Editable text={task} type="text" editFunc={setTask} />
    </Card>
  );
};

export default Task;
