import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import { storage } from '../firebase'
// import { database } from "firebase";

class AddPost extends Component {
    constructor(state) {
        super(state);
        this.state = {
            picture: null,
            pictureUrl: null,
            image: null,
            content: ""
        }
    }
    componentWillMount() {
        console.log(this.props);
        this.props.fetchUser();
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            content: event.target[1].value
        });
        const mainImage = storage.ref().child(`posts/${this.state.picture.name}`);
        mainImage.put(this.state.picture).then((snapshot) => {
            mainImage.getDownloadURL().then((url) => {
                this.setState({
                    image: url,
                    pictureUrl: ''
                })
                const post = {
                    image: this.state.image,
                    content: this.state.content,
                    likes: [""],
                    comments: 0,
                    userName: this.props.auth.displayName,
                    userImage: this.props.auth.photoURL
                }
                
                this.props.addPost(post, this.props.auth.uid)
            })
        })
        event.target[1].value=''; 
    }

    displayPicture(event) {
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                picture: file,
                pictureUrl: reader.result
            })
        }
        reader.readAsDataURL(file)

    }
    render() {
        // delete this.props.input.value;
        return (
            <div>{this.props.auth ?
                <form onSubmit={this.handleFormSubmit}>
                   
                    <img src={this.state.pictureUrl}></img>
                    <input type='file'
                        {...this.props.input}
                        onChange={event => { this.displayPicture(event) }} /><br/>
                    <label>Content:</label>
                    <textarea className="uk-textarea"></textarea><br/><br/>
                    <button className="uk-button uk-button-default" type="submit">Submit</button>
                </form> :
                <h3>Please login to be able write a post</h3>
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
export default connect(mapStateToProps, actions)(AddPost);