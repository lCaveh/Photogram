import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import SinglePost from './SinglePost'

class PrivatePosts extends Component {
    componentWillMount() {
        // this.props.fetchUser()
        const { auth } = this.props;
        if (auth){this.props.fetchPosts(auth.uid)};
    }
    render() {
        const foundPosts = this.props.posts;

        return (
            <div>{this.props.posts === "loading" ?
                <div>Loading</div> :
                <div>{
                    Object.keys(foundPosts).map((key) => {
                        return <SinglePost key={key} post={foundPosts[key]} />
                    })
                }
                </div>
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
export default connect(mapStateToProps, actions)(PrivatePosts);