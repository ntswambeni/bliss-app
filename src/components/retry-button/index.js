import React from "react";

import { Retry } from "./style";

const RetryButton = (props) => {
  return (
    <Retry type="button" onClick={props.handleClick}>
      <span className="material-symbols-outlined">refresh</span>
      Retry
    </Retry>
  );
};

export default RetryButton;
