import { combineReducers } from "redux";
import todo from "./todo";
import login from "./login";

export default combineReducers({
  todo,
  login,
});
