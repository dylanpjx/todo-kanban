import React, { useState } from "react";

import EditIcon from "@material-ui/icons/EditOutlined";

const Editable = ({ text, type, editFunc, props }) => {
  // State hook to show span or input
  const [isEditing, setEditing] = useState(false);

  // Exit editing on "Enter"
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };

  return (
    <div className="edit">
      {isEditing ? (
        <div onKeyDown={(e) => handleKeyDown(e)}>
          <input
            value={text}
            type={type}
            onChange={(e) => {
              editFunc(e.target.value);
            }}
            onBlur={() => setEditing(false)}
            onClick={(e) => e.target.select()}
          ></input>
        </div>
      ) : (
        <span onClick={() => setEditing(true)}>
          {text || "Oops, this cannot be blank"}
        </span>
      )}
    </div>
  );
};

export default Editable;
