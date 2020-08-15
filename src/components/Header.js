import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Editable from '../helpers/Editable';
import BoardMenu from '../helpers/BoardMenu';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    height: '70px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <Editable
          text={props.header}
          onSubmit={(text) => props.updateHeader(props.boardId, text)}
          onExitIfEmpty={null}
          styleProps={{
            padding: '2.5px',
            fontSize: '1.5rem',
            fontWeight: '400',
            lineHeight: '1.334',
          }}
        />
        <BoardMenu boards={props.boards} />
      </div>
    </header>
  );
};

export default Header;
