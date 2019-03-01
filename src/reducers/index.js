import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import comments from './comments'
import user from './user'

const rootReducer = combineReducers({
  routing: routerReducer,
  posts,
  comments,
  user
})

export default rootReducer