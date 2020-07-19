import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  addCol: {
    width: '270px',
    margin: '0px 15px',
    padding: '10px 0px',
  },
}));

const AddCol = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.addCol}>
      <Button
        fullWidth
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => props.addCol('Type your new column label here')}
      >
        Add another column
      </Button>
    </div>
  );
};

export default AddCol;
