import { postsRef, commentsRef, authRef, provider } from "../firebase";
import { FETCH_POSTS, FETCH_COMMENTS, FETCH_USER, FETCH_ALL_POSTS } from "./types";

export const addPost = (newPost, uid) => async dispatch => {
  postsRef
    .child(uid)
    .push()
    .set(newPost);
};

export const removePost = (removePostId, uid) => async dispatch => {
  postsRef
    .child(uid)
    .child(removePostId)
    .remove();
};

export const editPost = (postId, postUserId,content) => async dispatch => {
  postsRef
     .child(postUserId)
     .child(postId)
     .child('content')
     .set(content)
 };

export const postLikesUpdate = (postId, postUserId,likes) => async dispatch => {
 postsRef
    .child(postUserId)
    .child(postId)
    .child('likes')
    .set(likes)
};
export const fetchPosts = uid => async dispatch => {
  postsRef.child(uid).on("value", snapshot => {
    dispatch({
      type: FETCH_POSTS,
      payload: snapshot.val()
    });
  });
};

export const fetchAllPosts = () => async dispatch => {
  postsRef.limitToLast(100).on("value", snapshot => {
    dispatch({
      type: FETCH_ALL_POSTS,
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
  
  export const removeComment = (removeCommentId, postId) => async dispatch => {
    commentsRef
      .child(postId)
      .child(removeCommentId)
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

  export const editComment = (commentId, postId ,content) => async dispatch => {
    commentsRef
       .child(postId)
       .child(commentId)
       .child('content')
       .set(content)
   };

  export const commentLikesUpdate = (commentId, postId,likes) => async dispatch => {
    commentsRef
       .child(postId)
       .child(commentId)
       .child('likes')
       .set(likes)
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