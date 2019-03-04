import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import { timingSafeEqual } from "crypto";

class AddPost extends Component {

    componentWillMount() {
        const { auth } = this.props;
        this.props.fetchUser();
    }

handleFormSubmit = event => {
    event.preventDefault();
    const post={
        image: event.target[0].value,
        content: event.target[1].value,
        likes: [],
        comments: 0,
        userName: this.props.auth.displayName,
        userImage: this.props.auth.photoURL
    }
    const { addPost, auth } = this.props;
    addPost(post, auth.uid);
    event.target[0].value= "";
    event.target[1].value= "";
}

render(){

    return(
        <div>{this.props.auth ?
        <form onSubmit={this.handleFormSubmit}>
            <label>Image:</label>
            <input />
            <label>Content:</label>
            <input />
            <button type="submit">Submit</button>
        </form>:
        <h3>Please login to be able write a post</h3>
        }
        </div>
    )
}
}
const mapStateToProps = ({ posts, auth }) => {
    return {
        posts,
        auth
    };
};
export default connect(mapStateToProps, actions)(AddPost);