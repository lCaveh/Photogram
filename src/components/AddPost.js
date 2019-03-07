import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import { storage } from '../firebase'

class AddPost extends Component {
constructor(state) {
    super(state);
    this.state={
        picture:null,
        pictureUrl:null
    }
}
    componentWillMount() {
        console.log(this.props);
        this.props.fetchUser();
    }

    handleFormSubmit = event => {
        event.preventDefault();
//         const image = event.target[0].files[0];
// console.log(image)
// const uploadTask= storage(`images/${image.name}`).put(image);
        // const post = {
        //     image: event.target[0].value,
        //     content: event.target[1].value,
        //     likes: [""],
        //     comments: 0,
        //     userName: this.props.auth.displayName,
        //     userImage: this.props.auth.photoURL
        // }
        // const { addPost, auth } = this.props;
        // addPost(post, auth.uid);
        // event.target[0].value = "";
        // event.target[1].value = "";
    }
    // handleChange = event => {
    //     console.log(event.target.files[0])
    // }
displayPicture(event){
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = ()=> {
        this.setState({
            picture : file,
            pictureUrl: reader.result
        })
        console.log(this.pictureUrl)
    }
    reader.readAsDataURL(file)
    
}
    render() {
// delete this.props.input.value;
        return (
            <div>{this.props.auth ?
                <form onSubmit={this.handleFormSubmit}>
                    <label>Image:</label>
                    <img src={this.pictureUrl}></img>
                    <input type='file'
                    {...this.props.input}
                     onChange={event=>{this.displayPicture(event)}}/>
                    <label>Content:</label>
                    <input />
                    <button type="submit">Submit</button>
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