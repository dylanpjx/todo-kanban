import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";

import "./Editable.css";

const Editable = ({ text, type, onEdit }) => {
  // State hook to show span or input
  const [isEditing, setEditing] = useState(false);

  return (
    <div className="edit">
      {isEditing ? (
        <div>
          <TextField
            defaultValue={text}
            variant="outlined"
            onChange={(e) => {
              onEdit(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditing(false);
              }
            }}
            onBlur={() => setEditing(false)}
            onMouseEnter={(e) => {
              e.target.select();
            }}
          ></TextField>
        </div>
      ) : (
        <span className="editSpan" onClick={() => setEditing(true)}>
          {text || onEdit("Cannot be null")}
        </span>
      )}
    </div>
  );
};

export default Editable;
