import React, { useState } from 'react';
import clsx from 'clsx';

import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const listWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: '#494949',
    // postition: '',
  },

  button: {
    color: 'rgb(255, 255, 255)',
    margin: theme.spacing(1),
  },
  list: {
    backgroundColor: 'rgb(255, 253, 246)',
    width: listWidth,
    flexShrink: 0,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {props.boardOrder.map((board, index) => {
          return (
            <ListItem key={index} button>
              <ListItemText primary={props.boards[board].header} />
            </ListItem>
          );
        })}
        <ListItem
          button
          onClick={() => {
            props.addBoard('New board');
          }}
        >
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add board" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <Button
          className={classes.button}
          edge="start"
          onClick={toggleDrawer('left', true)}
        >
          View boards
        </Button>
        <Button
          className={classes.button}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
            return false;
          }}
        >
          Reset boards
        </Button>
      </Toolbar>
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
};

export default NavBar;
