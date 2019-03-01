import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { combineReducers } from "redux";

import posts from "./posts";
import comments from "./comments";
import auth from "./authReducer";

export default combineReducers({
  posts,
  comments,
  auth
});