import { useEffect } from "react";
import { connect } from "react-redux";

import { handleSetServerStatus } from "./actions/serverStatus";
import Loading from "./pages/loading/Loading";
import Spinner from "./components/spinner";

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
    <div>
      App
      {loading && <Spinner />}
    </div>
  );
}

const mapStateToProps = ({ loading, serverStatus }) => ({
  loading,
  serverStatus,
});

export default connect(mapStateToProps)(App);
