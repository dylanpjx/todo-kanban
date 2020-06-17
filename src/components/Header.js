import React, { useState } from "react";

import Editable from "./helpers/Editable";

const Header = (props) => {
  // State hook to change {text}
  const [header, setHeader] = useState(props.header);

  return (
    <header>
      <Editable text={header} type="text" editFunc={setHeader} />
    </header>
  );
};

export default Header;
