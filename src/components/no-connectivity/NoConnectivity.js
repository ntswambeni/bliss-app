import React from "react";
import { withTheme } from "styled-components";

import Cover from "../cover";
import { Widget } from "../../styled-components/Widget";
import { Header1, Paragraph } from "../../styled-components/Typography";

const NoConnectivity = ({ theme }) => {
  return (
    <Cover>
      <Widget>
        <Header1>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "80px" }}
          >
            wifi_off
          </span>
        </Header1>
        <Paragraph color={theme.colors.surface}>
          Please check your internet connection.
        </Paragraph>
      </Widget>
    </Cover>
  );
};

export default withTheme(NoConnectivity);
