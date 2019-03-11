import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import AddComment from './AddComment'
import Comment from './Comment'


class Post extends Component {
    componentWillMount() {
        this.props.fetchComments(this.props.match.params.id)
    }
    render() {
        const post = this.props.posts[this.props.match.params.id]
        return (
            <div>
                <div>
                    <div className="uk-comment">
                        <header className="uk-comment-header uk-grid-medium uk-flex-middle" data-uk-grid>
                            <div className="uk-width-auto">
                                <img className="uk-comment-avatar" src={post.userImage} width="20" height="20" alt="" />
                            </div>
                            <div className="uk-width-expand">
                                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset">{post.userName}</a></h4>
                            </div>
                        </header>
                        <div className="uk-comment-body">
                                <img className="uk-comment-avatar" src={post.image} alt="" />
                        </div>
                    </div>
                    <p>
                        {post.content}
                    </p>
                </div>
<hr/>
                {this.props.comments === "..." || !this.props.comments ?
                    <div>Loading</div> :
                    <div>
                        {
                            Object.keys(this.props.comments).map((key) => {
                                return <Comment key={key} id={key} comment={this.props.comments[key]} />
                            })
                        }
                    </div>
                }
                <AddComment id={this.props.match.params.id}></AddComment><br/><br/>
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