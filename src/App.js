import { useEffect } from "react";
import { connect } from "react-redux";

import { handleSetServerStatus } from "./actions/serverStatus";
import Loading from "./pages/loading/Loading";
import Spinner from "./components/spinner";

import { Route, Routes } from "react-router";
import QuestionList from "./pages/question-list/QuestionList";
import QuestionDetails from "./pages/question-details/QuestionDetails";
import NavOutlet from "./pages/nav-outlet/NavOutlet";
import useNetwork from "./utils/useNetwork";
import Cover from "./components/cover";
import { Widget } from "./styled-components/Widget";
import { Header1, Paragraph } from "./styled-components/Typography";
import { withTheme } from "styled-components";

function App({ dispatch, serverStatus, loading, theme }) {
  useEffect(() => {
    dispatch(handleSetServerStatus());
  }, [dispatch]);

  const isOnline = useNetwork();

  if (!isOnline) {
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
  }

  if (serverStatus !== "OK") {
    return (
      <>
        <Loading />
        {loading && <Spinner />}
      </>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/questions" element={<NavOutlet />}>
          <Route path="" element={<QuestionList />} />
          <Route path=":id" element={<QuestionDetails />} />
        </Route>
      </Routes>
      {loading && <Spinner />}
    </>
  );
}

const mapStateToProps = ({ loading, serverStatus }) => ({
  loading,
  serverStatus,
});

export default connect(mapStateToProps)(withTheme(App));
