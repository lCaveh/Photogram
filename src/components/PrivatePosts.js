import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import SinglePost from './SinglePost'

class PrivatePosts extends Component {
    componentWillMount() {
if(this.props.auth){this.props.fetchPosts(this.props.auth.uid)}
    }
    render() {
        return (
            <div>{this.props.posts === "loading" ?
                <div>Loading</div> :
                <div>{
                    Object.keys(this.props.posts).map((key) => {
                        return <SinglePost key={key} id={key} post={this.props.posts[key]} />
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