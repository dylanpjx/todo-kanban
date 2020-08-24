import React, { useState } from 'react';

import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  // Fixed width for Task and Label but not Header
  editWrapper: {
    display: 'flex',
    minHeight: '30px',
    width: (styleProps) => styleProps.width,
    wordWrap: 'break-word',
    flex: '1 1 auto',
  },
  // Change the inputStyles according to typography type
  inputStyle: {
    padding: (styleProps) => styleProps.padding,
    fontFamily: 'Arial',
    fontSize: (styleProps) => styleProps.fontSize,
    fontWeight: (styleProps) => styleProps.fontWeight,
    lineHeight: (styleProps) => styleProps.lineHeight,
    wordWrap: 'break-word',
  },
}));

const Editable = ({
  text,
  onSubmit,
  onExitIfEmpty,
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
        <div className={classes.inputStyle}>
          <ReactMarkdown source={text} />
        </div>
      )}
    </div>
  );
};

export default Editable;
