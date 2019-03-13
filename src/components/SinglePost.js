import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as actions from "../actions/actionCreator";
import UIkit from "uikit";
import { connect } from "react-redux";

UIkit.parallax();

class SinglePost extends Component {
  deleteHandler() {
    this.props.removePost(this.props.id, this.props.auth.uid);
  }
  likesHandler() {
    const likes = this.props.post.likes;
    if (likes.includes(this.props.auth.uid)){
    const removedUser = likes.filter(element=>element !=this.props.auth.uid )
    this.props.postLikesUpdate(this.props.id, this.props.post.userId, removedUser)
    } else {
    likes.push(this.props.auth.uid);
    this.props.postLikesUpdate(this.props.id, this.props.post.userId, likes);
    }
  }
  render() {
    const backStyle = {
      backgroundImage: `url(${this.props.post.image})`
    };
    return (
      <div>
        <div className="uk-comment uk-text-left">
          <header
            className="uk-comment-header uk-grid-medium uk-flex-middle"
            data-uk-grid
          >
            <div className="uk-width-auto">
              <img
                className="uk-comment-avatar uk-border-circle"
                src={this.props.post.userImage}
                width="20"
                height="20"
                alt=""
              />
            </div>
            <div className="uk-width-expand">
              <h4 className="uk-comment-title uk-margin-remove">
                <a className="uk-link-reset">{this.props.post.userName}</a>
              </h4>
            </div>
          </header>
          <div className="uk-comment-body">
            <Link to={`/${this.props.post.userId}/post/${this.props.id}`}>
              <div
                className="uk-height-small uk-background-cover uk-light uk-flex uk-flex-top"
                data-uk-parallax="bgy: -20"
                style={backStyle}
              />
            </Link>
          </div>
          {this.props.post.likes.length - 1} liked
          {this.props.auth ? (
            <div>
              <a
                onClick={() => {
                  this.likesHandler();
                }}
              >
                {this.props.post.likes.includes(this.props.auth.uid) ? (
                  <span>👎</span>
                ) : (
                  <span>👍</span>
                )}
              </a>
              {this.props.auth.uid === this.props.post.userId ? (
                <a onClick={this.deleteHandler.bind(this)}>🗑️</a>
              ) : (
                <span />
              )}
            </div>
          ) : (
            <div />
          )}
        </div>
        <p className="uk-text-left">{this.props.post.content}</p>
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
)(SinglePost);
