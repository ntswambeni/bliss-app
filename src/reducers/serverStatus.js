import { SET_SERVER_STATUS } from "../actions/serverStatus";

const serverStatus = (state = null, action) => {
  switch (action.type) {
    case SET_SERVER_STATUS:
      return action.serverStatus;
    default:
      return state;
  }
};

export default serverStatus;
