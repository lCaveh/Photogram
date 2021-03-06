import { FETCH_ALL_POSTS } from "../actions/types";

export default (state = "loading", action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return action.payload;
        default:
            return state;
    }
};