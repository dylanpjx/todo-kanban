import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  editWrapper: {
    flex: 1,
    minHeight: 30,
    padding: 0,
    paddingRight: 20,
  },
  inputStyle: {
    font: "inherit",
    padding: 2,
    margin: 0,
  },
}));

const Editable = ({ text, comp, onEdit }) => {
  const classes = useStyles();
  const [isEditing, setEditing] = useState(false);

  return (
    <div className={classes.editWrapper}>
      {isEditing ? (
        <TextField
          fullWidth
          multiline
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
          autoFocus
          onFocus={(e) => {
            e.target.select();
          }}
          InputProps={{
            classes: {
              input: classes.inputStyle,
              multiline: classes.inputStyle,
            },
          }}
        />
      ) : (
        <Typography
          variant={comp === "col" || comp === "header" ? "h6" : "body1"}
          style={{ padding: 2 }}
          onClick={() => setEditing(true)}
        >
          {text || onEdit("Cannot be null")}
        </Typography>
        // Change padding here based on type
      )}
    </div>
  );
};

export default Editable;
