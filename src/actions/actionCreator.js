import { postsRef, commentsRef, authRef, provider } from "../firebase";
import { FETCH_POSTS, FETCH_COMMENTS, FETCH_USER } from "./types";

export const addPost = (newPost, uid) => async dispatch => {
  postsRef
    .child(uid)
    .push()
    .set(newPost);
};

export const completePost = (completePostId, uid) => async dispatch => {
  postsRef
    .child(uid)
    .child(completePostId)
    .remove();
};

export const fetchPosts = uid => async dispatch => {
  postsRef.child(uid).on("value", snapshot => {
    dispatch({
      type: FETCH_POSTS,
      payload: snapshot.val()
    });
  });
};

export const addComment = (newComment, uid) => async dispatch => {
    commentsRef
      .child(uid)
      .push()
      .set(newComment);
  };
  
  export const completeComment = (completeCommentId, uid) => async dispatch => {
    commentsRef
      .child(uid)
      .child(completeCommentId)
      .remove();
  };
  
  export const fetchComments = uid => async dispatch => {
    commentsRef.child(uid).on("value", snapshot => {
      dispatch({
        type: FETCH_COMMENTS,
        payload: snapshot.val()
      });
    });
  };

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {})
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      console.log("done")
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};