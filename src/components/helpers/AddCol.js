import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddCol = (props) => {
  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        startIcon={<AddIcon />}
        style={{ paddingTop: 10, paddingBottom: 10 }}
        onClick={() => props.addCol('')}
      >
        Add another column
      </Button>
    </div>
  );
};

export default AddCol;
