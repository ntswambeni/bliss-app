import { useEffect } from "react";
import { connect } from "react-redux";

import { handleSetServerStatus } from "./actions/serverStatus";
import Loading from "./pages/loading/Loading";
import Spinner from "./components/spinner";

import { Route, Routes } from "react-router";
import QuestionList from "./pages/question-list/QuestionList";

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
        <Route path="/questions" element={<QuestionList />}></Route>
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
