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
}));

const ContentComponent = ({ text }) => (
  <Typography variant="h5">{text}</Typography>
);

const Header = (props) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Editable
        text={props.header}
        onSubmit={(text) => props.updateHeader(props.boardId, text)}
        ContentComponent={() => <ContentComponent text={props.header} />}
        styleProps={{
          padding: '2.5px',
          fontSize: '1.5rem',
          fontWeight: '400',
          lineHeight: '1.334',
          width: '180px',
        }}
      />
      <BoardMenu boards={props.boards} />
    </header>
  );
};

export default Header;
