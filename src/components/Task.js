import React, { useState } from "react";

import Editable from "./Editable";

const Task = (id, colNo, content) => {
  // State hook to change {text}
  const [task, setTask] = useState(content);

  // Delete task when there content is empty

  return (
    <div>
      <Editable text={task} type="text" editFunc={setTask} />
    </div>
  );
};

export default Task;
