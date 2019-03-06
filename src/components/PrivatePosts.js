import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import SinglePost from './SinglePost'

class PrivatePosts extends Component {
    componentWillMount() {
        setTimeout(() => { //this timeout allows the signin action to complete during page refresh [TEMP FIX]
            console.log(this.props);
            if (this.props.auth) { this.props.fetchPosts(this.props.auth.uid) };
        }, 300)
    }
    render() {
        const foundPosts = this.props.posts;
        return (
            <div>{this.props.posts === "loading" ?
                <div>Loading</div> :
                <div>{
                    Object.keys(foundPosts).map((key) => {
                        return <SinglePost key={key} id={key} post={foundPosts[key]} />
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