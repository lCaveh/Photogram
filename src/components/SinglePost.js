import React, { Component } from "react";
import { Link } from "react-router-dom";

class SinglePost extends Component {

  render() {
    return (
      <div>
        <div className="uk-comment">
          <header className="uk-comment-header uk-grid-medium uk-flex-middle" data-uk-grid>
            <div className="uk-width-auto">
              <img className="uk-comment-avatar" src={this.props.post.userImage} width="20" height="20" alt="" />
            </div>
            <div className="uk-width-expand">
              <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset">{this.props.post.userName}</a></h4>
            </div>
          </header>
          <div className="uk-comment-body">
          <Link to={`/post/${this.props.id}`}>
            <img className="uk-comment-avatar" src={this.props.post.image} alt="" />
            </Link>
          </div>
        </div>
        <p>
          {this.props.post.content}
        </p>
      </div>
    )
  }
}
export default SinglePost