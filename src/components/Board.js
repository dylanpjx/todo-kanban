import React from "react";

import Header from "./Header";
import Col from "./Col";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    textAlign: "center",
    flexWrap: "no-wrap",
  },
}));

const Board = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
          <Header header={props.header} />
        </Grid>

        {props.cols.map((col) => (
          <Grid item xs={3}>
            <Col id={col.id} label={col.label} tasks={col.tasks} />
          </Grid>
        ))}

        <Grid item xs={3}>
          <Button variant="contained" startIcon={<AddIcon />}>
            Add another column
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Board;
