import React from 'react';

import AddCol from './helpers/AddCol';
import Header from './Header';
import Col from './Col';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'no-wrap',
    padding: `0px ${theme.spacing(2)}px`,
  },
}));

const Board = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid container item xs={12} alignItems="center" justify="center">
          <Header header={props.header} updateHeader={props.updateHeader} />
        </Grid>

        {props.cols.map((col) => (
          <Grid item md={3} lg={2} key={col.id}>
            <Col
              colId={col.id}
              label={col.label}
              updateLabel={props.updateLabel}
              tasks={col.tasks}
              isNew={col.isNew}
              delCol={props.delCol}
              addTask={props.addTask}
              delTask={props.delTask}
              updateContent={props.updateContent}
            />
          </Grid>
        ))}

        <Grid item md={3} lg={2}>
          <AddCol addCol={props.addCol} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Board;
