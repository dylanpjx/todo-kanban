import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  editWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 30,
    paddingRight: 20,
  },
  inputStyle: {
    font: 'inherit',
    padding: 2,
    margin: 0,
  },
}));

const Editable = ({
  text,
  onSubmit,
  ContentComponent,
  multiline = false,
  initialIsEditing = false,
}) => {
  const classes = useStyles();

  const [isEditing, setEditing] = useState(initialIsEditing);

  return (
    <div
      onClick={() => {
        if (!isEditing) setEditing(true);
      }}
      className={classes.editWrapper}
      style={{ whiteSpace: 'pre-line' }}
    >
      {isEditing ? (
        <TextField
          fullWidth
          multiline={multiline}
          defaultValue={text}
          variant="outlined"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (e.shiftKey) return;
              e.preventDefault(); // prevent default activity (which is to input <CR>)
              if (e.target.value.trim() !== '') {
                onSubmit(e.target.value.trim());
                setEditing(false);
              }
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
        <ContentComponent />
      )}
    </div>
  );
};

export default Editable;
