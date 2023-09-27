import React, { useState } from "react";
import "./RightSide.css";

import ShareModal from "../ShareModal/ShareModal";
import NavIcons from "../NavIcons/NavIcons";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      <NavIcons/>
    </div>
  );
};

export default RightSide;
