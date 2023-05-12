import { combineReducers } from "redux";

import loading from "./loading";
import serverStatus from "./serverStatus";
import questions from "./questions";

export default combineReducers({ loading, serverStatus, questions });
