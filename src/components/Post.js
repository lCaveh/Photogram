import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import { auth } from "firebase";

class Post extends Component {
    componentWillMount() {
// this.props.fetchComments(this.props.match.params.id)

    }
    render() {
        console.log("post:",this.props)
        return (
            <div>
                <p>
                    {this.props.match.params.id}   </p>
                <p>
                    {this.props.posts[`${this.props.match.params.id}`].image}

                </p>
<button>Add Comment</button>
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
export default connect(mapStateToProps, actions)(Post);