import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const NavBar = (props) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Button color="primary" edge="start" onClick={handleDrawerOpen}>
            Toggle Board List
          </Button>
          <Button color="primary" onClick={() => localStorage.clear()}>
            Reset localStorage
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" anchor="left open={open}">
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        {props.boards.map((board) => {
          return (
            <ListItem button>
              <ListItemText inset primary={board.header} />
            </ListItem>
          );
        })}
      </Drawer>
    </div>
  );
};
