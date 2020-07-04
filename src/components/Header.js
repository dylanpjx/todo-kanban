import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Editable from "./helpers/Editable";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    height: "10vh",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 300,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const [header, setHeader] = useState(props.header);
  const [menu, setMenu] = useState(null);

  return (
    <header className={classes.header}>
      <Editable text={header} comp="header" onEdit={setHeader} />
      <IconButton
        onClick={(e) => setMenu(e.currentTarget)}
        className={classes.menu}
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
        <MenuItem onClick={() => setMenu(null)}>Delete Board</MenuItem>
        <MenuItem onClick={() => setMenu(null)}></MenuItem>
        <MenuItem onClick={() => setMenu(null)}></MenuItem>
      </Menu>
    </header>
  );
};

export default Header;
