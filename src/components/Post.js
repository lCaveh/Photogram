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
                  <a className="uk-link-reset">{post.userName.split(' ')[0]}</a>
                </h4>
              </div>
            </header>
            <div className="uk-comment-body">
              <img
                className="uk-comment-avatar post-image uk-animation-scale-up"
                src={post.image}
                alt=""
              />
            </div>
            {post.likes.length - 1} liked

          </div>
          <div className="comment-container">
          <span className="comment-image">
            <img
              src={post.userImage}
              width="20"
              height="20"
              className="uk-border-circle"
            />
          </span>
          <span className="comment-content">{post.userName.split(' ')[0]} - {post.content}</span>
          <span className="comment-like">
          {this.props.auth ? (
              <span>
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
              </span>
            ) : (
              <div />
            )}
          </span>
          </div>
        </div>
        {this.state.editAccess ? (
          <EditPost post={post} postId={this.props.match.params.id} />
        ) : (
          <div />
        )}
        <hr />
        {this.props.comments === "loading" || !this.props.comments ? (
          <div>Loading</div>
        ) : (
          <div >
            {Object.keys(this.props.comments).map(key => {
              return (
                <div key={key}>
                <Comment
                  id={key}
                  postId={this.props.match.params.id}
                  comment={this.props.comments[key]}
                />
                {this.props.auth?
                <span>
                  {this.props.comments[key].userId === this.props.auth.uid?
                <a className="uk-text-right" onClick={()=>this.props.removeComment(key, this.props.match.params.id)}>🗑️</a>:
                  <span/>
                  }
                </span>:
                <span/>
              }
                </div>
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
