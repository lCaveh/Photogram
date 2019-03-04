import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions/actionCreator";

class Header extends Component {
render(){
    console.log(this.props.auth)
    return (
        <div>
            <h1>Header Component</h1>
            <h3 onClick={this.props.signIn}>Login</h3>
            <span></span>
        </div>
    )
}
}
function mapStateToProps({ auth }) {
    return { auth };
  }
  
export default connect(mapStateToProps, { signIn })(Header);