import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    width: '30%',
    maxWidth: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const ContentComponent = ({ text }) => (
  <Typography variant="h5" style={{ justifyContent: 'center' }}>
    {text}
  </Typography>
);

const Header = (props) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <Editable
          text={props.header}
          onSubmit={(text) => props.updateHeader(props.boardId, text)}
          onExitIfEmpty={null}
          ContentComponent={() => <ContentComponent text={props.header} />}
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
