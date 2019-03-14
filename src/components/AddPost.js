import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import { storage } from "../firebase";
import UploadImage from '../images/Upload.svg'

class AddPost extends Component {
  constructor(state) {
    super(state);
    this.state = {
      picture: null,
      pictureUrl: null,
      image: null,
      content: "",
      showUploadImage: false
    };
  }
  componentWillMount() {
    this.props.fetchUser();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      content: event.target[1].value,
      showUploadImage: true
    });
    event.target[0].value=""
    const date = new Date;
    const mainImage = storage.ref().child(`posts/${date.getTime()}${this.state.picture.name}`);
    mainImage.put(this.state.picture).then(snapshot => {
      mainImage.getDownloadURL().then(url => {
        this.setState({
          image: url,
          pictureUrl: "",
          showUploadImage: false
        });
        const post = {
          image: this.state.image,
          content: this.state.content,
          likes: [""],
          comments: 0,
          userName: this.props.auth.displayName,
          userImage: this.props.auth.photoURL,
          userId: this.props.auth.uid
        };
        this.props.addPost(post, this.props.auth.uid);
      });
    });
    event.target[1].value = "";
  };

  displayPicture(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        picture: file,
        pictureUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }
  render() {
    return (
      <div>
        {this.props.auth ? (
          <form onSubmit={this.handleFormSubmit}>
          {this.state.showUploadImage ? <img className="upload-image" src={UploadImage}/>:<span/>}
            <img src={this.state.pictureUrl} />
            <input
              type="file"
              accept="image/png, image/jpeg"
              {...this.props.input}
              onChange={event => {
                this.displayPicture(event);
              }}
              required
            />
            <br />
            <label>Content:</label>
            <textarea className="uk-textarea" required/>
            <br />
            <br />
            <button className="uk-button uk-button-default" type="submit">
              Submit
            </button>
            <br/><br/><br/>
          </form>
        ) : (
          <p>Please login to be able write a post</p>
        )}
      </div>
    );
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
)(AddPost);
