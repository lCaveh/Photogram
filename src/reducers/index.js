import { combineReducers } from 'redux'
import posts from "./posts";
import comments from "./comments";
import auth from "./auth";

export default combineReducers({
  posts,
  comments,
  auth
});