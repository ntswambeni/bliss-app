import { combineReducers } from "redux";

import loading from "./loading";
import serverStatus from "./serverStatus";

export default combineReducers({ loading, serverStatus });
