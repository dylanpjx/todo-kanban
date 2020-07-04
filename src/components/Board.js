import React from "react";

import Header from "./Header";
import Col from "./Col";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "no-wrap",
    padding: `0px ${theme.spacing(2)}px`,
  },
}));

const Board = (props) => {
  const classes = useStyles();

  return (
      <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid container item xs={12} alignItems="center" justify="center">
          <Header header={props.header} />
        </Grid>

        {props.cols.map((col) => (
          <Grid item md={3} lg={2}>
              <Col id={col.id} label={col.label} tasks={col.tasks} />
          </Grid>
        ))}

        <Grid item md={3} lg={2}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<AddIcon />}
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            Add another column
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Board;
