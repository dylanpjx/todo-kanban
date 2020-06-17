import React from "react";

import Header from "./Header";
import Col from "./Col";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Board = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header header={props.header} />
        </Grid>
        {props.cols.map((col) => (
          <Grid item md={12} lg={3}>
            <Col id={col.id} label={col.label} tasks={col.tasks} />
          </Grid>
        ))}
        <Grid item md={12} lg={3}></Grid>
      </Grid>
    </div>
  );
};

export default Board;
