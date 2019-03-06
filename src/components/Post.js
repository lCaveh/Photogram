import React, { Component } from "react";
import Comment from './Comment'

class Post extends Component {
render(){
    console.log(this.props)
    return (
        <div>
            <p>
            post   </p>
            {/* <h1>Post Component</h1>
          
            {this.props.key}
            {this.props.post.content} */}

        </div>
    )
}
}
export default Post