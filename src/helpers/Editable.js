import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  editWrapper: {
    display: 'flex',
    minHeight: '30px',
    width: '230px',
    wordWrap: 'break-word',
  },
  inputStyle: {
    // padding: '2.5px',
    // padding: '8px',
    // padding: '12px',
    padding: (styleProps) => styleProps.padding,
    fontSize: (styleProps) => styleProps.fontSize,
    fontWeight: (styleProps) => styleProps.fontWeight,
    lineHeight: (styleProps) => styleProps.lineHeight,
    // lineHeight: 1.55,
    margin: '0px',
    wordWrap: 'break-word',
  },
}));

const Editable = ({
  text,
  onSubmit,
  onExitIfEmpty,
  ContentComponent,
  initIsEditing,
  multiline = false,
  styleProps,
}) => {
  const classes = useStyles(styleProps);

  const [isEditing, setEditing] = useState(initIsEditing);

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
          autoFocus
          onFocus={(e) => {
            e.target.select();
          }}
          onBlur={(e) => {
            setEditing(false);
            onExitIfEmpty && onExitIfEmpty();
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