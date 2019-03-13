import React, { Component } from "react";


class Comment extends Component {
    render() {
        return (
            <div className="comment-container">
                    <span className="comment-image"><img src={this.props.comment.userImage} width="20" height="20" className="uk-border-circle"/></span>
                    <span className="comment-content">{this.props.comment.userName} - {this.props.comment.content}</span>
                    <span className="comment-like">♡</span>
            </div>
        )
    }
}
export default Comment