import { createStore } from 'redux'
import rootReducer from './reducers/index'

const defaultState = { posts, comments, user }
const store = createStore(rootReducer, defaultState)

export default store