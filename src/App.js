import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { connect } from "react-redux";

import { handleSetServerStatus } from "./actions/serverStatus";
import Loading from "./pages/loading/Loading";
import Spinner from "./components/spinner";
import QuestionList from "./pages/question-list/QuestionList";
import QuestionDetails from "./pages/question-details/QuestionDetails";
import NavOutlet from "./pages/nav-outlet/NavOutlet";
import useNetwork from "./utils/useNetwork";
import NotFound from "./pages/not-found/NotFound";
import NoConnectivity from "./components/no-connectivity/NoConnectivity";
import { createGlobalStyle } from "styled-components";

function App({ dispatch, serverStatus, loading }) {
  useEffect(() => {
    dispatch(handleSetServerStatus());
  }, [dispatch]);

  const isOnline = useNetwork();

  if (serverStatus !== "OK") {
    return (
      <>
        <Loading />
        {loading && <Spinner />}
      </>
    );
  }

  const GlobalStyle = createGlobalStyle`
  html, body { height: ${!isOnline && "100%"}; overflow: ${
    !isOnline && "hidden"
  }}
 `;

  return (
    <>
      {!isOnline && <NoConnectivity />}
      <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<Navigate to="/questions" />} />
        <Route path="/questions" element={<NavOutlet />}>
          <Route path="" element={<QuestionList />} />
          <Route path=":id" element={<QuestionDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {loading && <Spinner />}
    </>
  );
}

const mapStateToProps = ({ loading, serverStatus }) => ({
  loading,
  serverStatus,
});

export default connect(mapStateToProps)(App);
