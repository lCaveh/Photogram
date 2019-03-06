import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import { auth } from "firebase";
import AddComment from './AddComment'
import Comment from './Comment'


class Post extends Component {
    componentWillMount() {
        this.props.fetchComments(this.props.match.params.id)

    }
    render() {
        console.log("post:", this.props)
        return (
            <div>
                <p>
                    {this.props.match.params.id}   </p>
                <p>
                    {this.props.posts[`${this.props.match.params.id}`].image}
                </p>
                {        Object.keys(this.props.comments).map((key) => {
                        return <Comment key={key} id={key} comment={this.props.comments[key]} />
                    })}
                    <AddComment id={this.props.match.params.id}></AddComment> 
            </div>
        )
    }
}
const mapStateToProps = ({ posts, comments, auth }) => {
    return {
        posts,
        comments,
        auth
    };
};
export default connect(mapStateToProps, actions)(Post);