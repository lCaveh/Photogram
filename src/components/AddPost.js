import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";

class AddPost extends Component {
    state = {
        addFormVisible: false,
        addFormValue: ""
    };
    componentWillMount() {
        const { auth } = this.props;
        this.props.fetchPosts(auth.uid);
    }
    handleInputChange = event => {
        this.setState({ addFormValue: event.target.value });
    };
    handleFormSubmit = event => {
        const { addFormValue } = this.state;
        const { addPost, auth } = this.props;
        event.preventDefault();
        addPost({ title: addFormValue }, auth.uid);
        this.setState({ addFormValue: "" });
    };
    render() {
        const { addFormVisible, addFormValue } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div >
                    <i >note_add</i>
                    <input
                        value={addFormValue}
                        onChange={this.handleInputChange}
                        type="text"
                    />
                    <button type="submit">submit</button>
                </div>
            </form>
        )
    }
}
const mapStateToProps = ({ data, auth }) => {
    return {
        data,
        auth
    };
};
export default connect(mapStateToProps, actions)(AddPost);