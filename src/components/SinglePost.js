import React, { Component } from "react";
import { Link } from "react-router-dom";

class SinglePost extends Component {

  render() {
    return (
      <div>
        <h1>Post Component</h1>
        <Link to={`/post/${this.props.id}`}>
          <p>{this.props.post.image}</p>
        </Link>
        <p>

          {this.props.id}
          {this.props.post.content}

        </p>
      </div>
    )
  }
}
export default SinglePost