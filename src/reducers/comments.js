import { FETCH_COMMENTS } from "../actions/types";

export default (state = "loading", action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload;
    default:
      return state;
  }
};