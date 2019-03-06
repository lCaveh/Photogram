import React, { Component } from "react";
import Comment from './Comment'
import { Link } from "react-router-dom";;
class Post extends Component {
  componentWillMount() {
    console.log(this.props)
}
render(){
console.log(this.props)
    return (
        <div>
            <h1>Post Component</h1>
            {/* <Link to={`/post/${post.props.id}`>
            <p>{this.props.post.image}</p>
            </Link> */}
          <p>

            {this.props.id}
            {this.props.post.content}

          </p>
        </div>
    )
}
}
export default Post