import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";

class AddComment extends Component {

    componentWillMount() {
        this.props.fetchUser();
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const comment = {
            content: event.target[0].value,
            likes: [""],
            userName: this.props.auth.displayName,
            userImage: this.props.auth.photoURL
        }
        this.props.addComment(comment, this.props.id);
        event.target[0].value = "";
    }

    render() {

        return (
            <div>{this.props.auth ?
                <form onSubmit={this.handleFormSubmit}>
                    <label>Content:</label>
                    <input />
                    <button type="submit">Submit</button>
                </form> :
                <div/>
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
export default connect(mapStateToProps, actions)(AddComment);