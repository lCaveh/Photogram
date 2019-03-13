import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";

class EditComment extends Component {

  handleFormSubmit = event => {
    event.preventDefault();
    const content= event.target[0].value;
    this.props.editComment(this.props.commentId,this.props.postId,content)
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
const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};
export default connect(
  mapStateToProps,
  actions
)(EditComment);