import React from "react";
import { connect } from "react-redux";
import { withTheme } from "styled-components";

import Cover from "../../components/cover";
import { Header1, Paragraph } from "../../styled-components/Typography";
import { Widget } from "../../styled-components/Widget";
import RetryButton from "../../components/retry-button";
import {
  handleSetServerStatus,
  setServerStatus,
} from "../../actions/serverStatus";

const Loading = ({ dispatch, serverStatus, theme }) => {
  const checkServerStatus = () => {
    dispatch(setServerStatus(null));
    dispatch(handleSetServerStatus());
  };
  return (
    <Cover>
      {serverStatus === null ? (
        <Widget>
          <Header1 size={80}>Q?</Header1>
          <Paragraph color={theme.colors.surface}>Loading app...</Paragraph>
        </Widget>
      ) : (
        <div>
          <RetryButton handleClick={checkServerStatus} />
          <Paragraph color={theme.colors.surface}>
            Sorry, we could not connect to the server.
          </Paragraph>
        </div>
      )}
    </Cover>
  );
};
const mapStateToProps = ({ loading, serverStatus }) => ({
  loading,
  serverStatus,
});

export default connect(mapStateToProps)(withTheme(Loading));
