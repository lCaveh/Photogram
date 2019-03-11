import { combineReducers } from 'redux'
import allposts from "./allposts";
import posts from "./posts";
import comments from "./comments";
import auth from "./auth";

export default combineReducers({
  allposts,
  posts,
  comments,
  auth
});