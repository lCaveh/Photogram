import React, { Component } from "react";


class Comment extends Component {
    render() {
        console.log("comment", this.props.comment.content)

        return (
            <div>
                <p>
                    <img src={this.props.comment.userImage} width="20" height="20" />
                    {this.props.comment.userName} -
                    {this.props.comment.content}
                </p>
            </div>
        )
    }
}
export default Comment