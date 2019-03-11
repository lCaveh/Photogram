import React, { Component } from "react";
import Dummy from '../images/dummy.png'
import { connect } from "react-redux";

class ProfileDetail extends Component {

    render(){
        return(
            <div>
                {this.props.auth?
                <div>
                    <img src={this.props.auth.photoURL}/><br/>
                    <p>Name: {this.props.auth.displayName}</p>
                    <p>Email: {this.props.auth.email}</p>
                </div>:
                <div>
                    <img src={Dummy}/><br/>
                    <h3>Please login to see your profile detail</h3>
                </div>
            }
            </div>
        )
    }
}
const mapStateToProps = ({ auth }) => {
    return {
        auth
    };
};
export default connect(mapStateToProps)(ProfileDetail);