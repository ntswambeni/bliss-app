import { getServerStatus } from "../utils/api";
import { setLoading } from "./loading";

export const SET_SERVER_STATUS = "SET_SERVER_STATUS";

export const setServerStatus = (serverStatus) => ({
  type: SET_SERVER_STATUS,
  serverStatus,
});

export const handleSetServerStatus = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await getServerStatus();
      const { data } = response;
      dispatch(setServerStatus(data.status));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setServerStatus("NOT OK"));
      dispatch(setLoading(false));
    }
  };
};
