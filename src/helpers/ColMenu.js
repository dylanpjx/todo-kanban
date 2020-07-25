import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  // colMenu: { float: 'right', padding: '0px' },
}));

const ColMenu = (props) => {
  const classes = useStyles();
  const [menu, setMenu] = useState(null);

  return (
    <div className={classes.colMenu}>
      <IconButton onClick={(e) => setMenu(e.currentTarget)}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="col-menu"
        anchorEl={menu}
        keepMounted
        open={Boolean(menu)}
        onClose={() => setMenu(null)}
      >
        <MenuItem onClick={() => props.delCol(props.colId)}>
          Delete Column
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ColMenu;
