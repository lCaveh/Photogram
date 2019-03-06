import React, { Component } from "react";


class Comment extends Component {
    render() {

        return (
            <div>
                <h1>{this.props.comment.content}</h1>
            </div>
        )
    }
}
export default Comment