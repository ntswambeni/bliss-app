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

const GlobalStyle = createGlobalStyle`
  html, body { height: ${({ isOnline }) => !isOnline && "100%"}; overflow:${({
  isOnline,
}) => !isOnline && "hidden"} 
  }
 `;
function App({ dispatch, serverStatus, loading }) {
  const isOnline = useNetwork();

  useEffect(() => {
    dispatch(handleSetServerStatus());
  }, [dispatch]);

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
      <GlobalStyle isOnline={isOnline} />
      {!isOnline && <NoConnectivity />}
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
