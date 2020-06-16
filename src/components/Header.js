import React, { useState } from "react";

import Editable from "./Editable";

const Header = (props) => {
  // State hook to change {text}
  const [header, setHeader] = useState(props.header);

  return (
    <div className="subtitle">
      <header>
        <Editable text={header} type="text" editFunc={setHeader} />
      </header>
    </div>
  );
};

export default Header;
