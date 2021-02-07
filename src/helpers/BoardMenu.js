import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  // boardMenu: { padding: '0px' },
}));

const BoardMenu = (props) => {
  const classes = useStyles();
  const [menu, setMenu] = useState(null);

  return (
    <div>
      <IconButton
        className={classes.boardMenu}
        onClick={(e) => setMenu(e.currentTarget)}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="col-menu"
        anchorEl={menu}
        keepMounted
        open={Boolean(menu)}
        onClose={() => setMenu(null)}
      >
        <MenuItem
          disabled={Object.keys(props.boards).length <= 1}
          onClick={() => props.delBoard}
        >
          Delete Board
        </MenuItem>
      </Menu>
    </div>
  );
};

export default BoardMenu;
