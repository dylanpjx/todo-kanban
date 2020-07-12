import React from 'react';

import Editable from './helpers/Editable';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  taskWrapper: {
    padding: theme.spacing(2),
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    right: 0,
    // float: "right",
  },
}));

const ContentComponent = ({ text }) => <Typography>{text}</Typography>;

const Task = (props) => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" square className={classes.taskWrapper}>
      <Editable
        text={props.content}
        onSubmit={(text) =>
          props.updateContent(props.colId, props.taskId, text)
        } // called when you commit the edit
        ContentComponent={() => <ContentComponent text={props.content} />}
        multiline
        initialIsEditing={props.isNew}
      />
      <IconButton
        className={classes.button}
        onClick={() => props.delTask(props.colId, props.taskId)}
      >
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
};

export default Task;
