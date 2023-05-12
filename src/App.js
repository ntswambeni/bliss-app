import { useEffect } from "react";
import { connect } from "react-redux";

import { handleSetServerStatus } from "./actions/serverStatus";
import Loading from "./pages/loading/Loading";
import Spinner from "./components/spinner";

import { Route, Routes } from "react-router";
import QuestionList from "./pages/question-list/QuestionList";
import QuestionDetails from "./pages/question-details/QuestionDetails";
import NavOutlet from "./pages/nav-outlet/NavOutlet";

function App({ dispatch, serverStatus, loading }) {
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

export default connect(mapStateToProps)(App);
