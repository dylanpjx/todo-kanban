import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Editable from '../helpers/Editable';
import BoardMenu from '../helpers/BoardMenu';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    height: '50px',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '15px',
  },
}));

const ContentComponent = ({ text }) => <Typography>{text}</Typography>;

const Header = (props) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Editable
        text={props.header}
        onSubmit={(text) => props.updateHeader(props.boardId, text)}
        ContentComponent={() => <ContentComponent text={props.header} />}
      />
      <BoardMenu />
    </header>
  );
};

export default Header;
