import React, { Component } from "react";
import { Link } from "react-router-dom";
import UIkit from "uikit";
import { connect } from "react-redux";


UIkit.parallax();

class SinglePost extends Component {
  render() {
    const backStyle = {
      backgroundImage: `url(${this.props.post.image})`
    };
    return (
      <div>
        <div className="uk-comment">
          <header
            className="uk-comment-header uk-grid-medium uk-flex-middle"
            data-uk-grid
          >
            <div className="uk-width-auto">
              <img
                className="uk-comment-avatar"
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
            <Link to={`/${this.props.post.userId}/post/${this.props.id}`} params={{ post: this.props.post }}>
              <div
                className="uk-height-small uk-background-cover uk-light uk-flex uk-flex-top"
                data-uk-parallax="bgy: -20"
                style={backStyle}
              />
            </Link>
          </div>
          {this.props.auth ? (
            <div>
              <span>🖤❤️</span>
              <span>💬</span>
              <span>🗑️</span>
              <span>🖊️</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return {
      auth
  };
};
export default connect(mapStateToProps)(SinglePost);
