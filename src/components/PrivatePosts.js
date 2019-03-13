import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import SinglePost from './SinglePost'
import UIkit from "uikit";
import Loading from '../images/loading.gif'


UIkit.grid();

class PrivatePosts extends Component {
    componentWillMount() {
        if (this.props.auth) { this.props.fetchPosts(this.props.auth.uid) }
    }
    render() {
        return (
            <div>
                {!this.props.posts || this.props.posts === "loading" ?
                    <div className="uk-position-center" ><img className="loading" src={Loading}/></div> :
                    <div className="uk-grid-match uk-child-width-1-3@m uk-text-center" data-uk-grid>
                        {
                            Object.keys(this.props.posts).map((key) => {
                                return <div key={key}>
                                    <div className="uk-card uk-card-default uk-card-body">
                                        <SinglePost id={key} post={this.props.posts[key]} />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                }
                <br /><br /><br />
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