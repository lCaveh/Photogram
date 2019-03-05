import React, { Component } from "react";
import Comment from './Comment'

class Post extends Component {
render(){
console.log(this.props)
    return (
        <div>
            <h1>Post Component</h1>
          <p>

            {this.props.key}
            {this.props.post.content}

          </p>
        </div>
    )
}
}
export default Post