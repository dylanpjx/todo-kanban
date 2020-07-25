import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  addCol: {
    minWidth: '270px',
    margin: '0px 15px',
  },
}));

const AddCol = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.addCol}>
      <Button
        fullWidth
        color="primary"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => props.addCol('')}
        style={{
          backgroundColor: '#494949',
        }}
      >
        Add another column
      </Button>
    </div>
  );
};

export default AddCol;
