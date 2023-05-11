import React from "react";

import { Overlay } from "./style";

const Cover = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};

export default Cover;
