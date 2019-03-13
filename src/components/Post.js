import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import AddComment from "./AddComment";
import Comment from "./Comment";
import EditPost from "./EditPost";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editAccess: false
    };
    this.editHandler = this.editHandler.bind(this);
  }
  componentWillMount() {
    this.props.fetchAllPosts();
    this.props.fetchComments(this.props.match.params.id);
  }

  editHandler() {
    this.setState({
      editAccess: !this.state.editAccess
    });
  }
  likesHandler() {
    const post = this.props.allposts[this.props.match.params.userid][
      this.props.match.params.id
    ];
    const likes = post.likes;
    if (likes.includes(this.props.auth.uid)) {
      const removedUser = likes.filter(
        element => element != this.props.auth.uid
      );
      this.props.postLikesUpdate(
        this.props.match.params.id,
        post.userId,
        removedUser
      );
    } else {
      likes.push(this.props.auth.uid);
      this.props.postLikesUpdate(
        this.props.match.params.id,
        post.userId,
        likes
      );
    }
  }
  render() {
    const post = this.props.allposts[this.props.match.params.userid][
      this.props.match.params.id
    ];
    return (
      <div>
        <div>
          <div className="uk-comment">
            <header
              className="uk-comment-header uk-grid-medium uk-flex-middle"
              data-uk-grid
            >
              <div className="uk-width-auto">
                <img
                  className="uk-comment-avatar uk-border-circle"
                  src={post.userImage}
                  width="20"
                  height="20"
                  alt=""
                />
              </div>
              <div className="uk-width-expand">
                <h4 className="uk-comment-title uk-margin-remove">
                  <a className="uk-link-reset">{post.userName}</a>
                </h4>
              </div>
            </header>
            <div className="uk-comment-body">
              <img
                className="uk-comment-avatar post-image"
                src={post.image}
                alt=""
              />
            </div>
            {post.likes.length - 1} liked
            {this.props.auth ? (
              <div>
                <a
                  onClick={() => {
                    this.likesHandler();
                  }}
                >
                  {post.likes.includes(this.props.auth.uid) ? (
                    <span>👎</span>
                  ) : (
                    <span>👍</span>
                  )}
                </a>
                {this.props.auth.uid === post.userId ? (
                  <a
                    onClick={post => {
                      this.editHandler(post);
                    }}
                  >
                    🖊️
                  </a>
                ) : (
                  <span />
                )}
              </div>
            ) : (
              <div />
            )}
          </div>
          <p>{post.content}</p>
        </div>
        {this.state.editAccess ? (
          <EditPost post={post} postId={this.props.match.params.id} />
        ) : (
          <div />
        )}
        <hr />
        {this.props.comments === "..." || !this.props.comments ? (
          <div>Loading</div>
        ) : (
          <div>
            {Object.keys(this.props.comments).map(key => {
              return (
                <Comment
                  key={key}
                  id={key}
                  postId={this.props.match.params.id}
                  comment={this.props.comments[key]}
                />
              );
            })}
          </div>
        )}
        <AddComment id={this.props.match.params.id} />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
const mapStateToProps = ({ allposts, comments, auth }) => {
  return {
    allposts,
    comments,
    auth
  };
};
export default connect(
  mapStateToProps,
  actions
)(Post);
