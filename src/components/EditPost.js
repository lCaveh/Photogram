import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";

class EditPost extends Component {

  handleFormSubmit = event => {
    event.preventDefault();
    const content= event.target[0].value;
    this.props.editPost(this.props.postId,this.props.auth.uid,content)
    event.target[0].value=""

  };

  render() {
    return (
      <div>
        {this.props.auth?
          <form onSubmit={this.handleFormSubmit}>
            <label>Content:</label>
            <textarea className="uk-textarea" required/>
            <br />
            <br />
            <button className="uk-button uk-button-default" type="submit">
              Edit
            </button>
          </form>:
          <div/>}
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
export default connect(
  mapStateToProps,
  actions
)(EditPost);
