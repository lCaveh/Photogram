import React, { Component } from "react";
import * as actions from "../actions/actionCreator";
import { connect } from "react-redux";
import EditComment from "./EditComment";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editAccess: false
    };
  }
  editHandler() {
    this.setState({
      editAccess: !this.state.editAccess
    });
  }
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
      this.props.commentLikesUpdate(this.props.id, this.props.postId, likes);
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
            {this.props.comment.userName.split(' ')[0]} - {this.props.comment.content}
          </span>
          {this.props.auth ? (
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
          ) : (
            <span />
          )}
        </div>
        <p>
          {this.props.comment.likes.length - 1 < 2 ? (
            <span>{this.props.comment.likes.length - 1} like</span>
          ) : (
            <span>{this.props.comment.likes.length - 1} likes</span>
          )}
          {this.props.auth ? (
            <span>
              {this.props.auth.uid === this.props.comment.userId ? (
                <a
                  onClick={() => {
                    this.editHandler();
                  }}
                >
                  🖊️
                </a>
              ) : (
                <span />
              )}
            </span>
          ) : (
            <span />
          )}
        </p>
        {this.state.editAccess ? (
          <EditComment
            comment={this.props.comment}
            commentId={this.props.id}
            postId={this.props.postId}
          />
        ) : (
          <div />
        )}
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
