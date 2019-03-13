import React, { Component } from "react";
import * as actions from "../actions/actionCreator";
import { connect } from "react-redux";

class Comment extends Component {
  likesHandler() {
    const likes = this.props.comment.likes;
    if (likes.includes(this.props.auth.uid)) {
      const removedUser = likes.filter(
        element => element != this.props.auth.uid
      );
      this.props.commentLikesUpdate(
          this.props.id,
        this.props.postId,
        removedUser
      );
    } else {
      likes.push(this.props.auth.uid);
      this.props.commentLikesUpdate(
        this.props.id,
        this.props.postId,
        likes
      );
    }
  }
  render() {
    return (
      <div>
        <div className="comment-container">
          <span className="comment-image">
            <img
              src={this.props.comment.userImage}
              width="20"
              height="20"
              className="uk-border-circle"
            />
          </span>
          <span className="comment-content">
            {this.props.comment.userName} - {this.props.comment.content}
          </span>
          <a
            onClick={() => {
              this.likesHandler();
            }}
            className="comment-like"
          >
            {this.props.comment.likes.includes(this.props.auth.uid) ? (
              <span>❤️</span>
            ) : (
              <span>♡</span>
            )}
          </a>
        </div>
        <p>
          {this.props.comment.likes.length - 1 < 2 ? (
            <span>{this.props.comment.likes.length - 1} like</span>
          ) : (
            <span>{this.props.comment.likes.length - 1} likes</span>
          )}
        </p>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};
export default connect(
  mapStateToProps,
  actions
)(Comment);
