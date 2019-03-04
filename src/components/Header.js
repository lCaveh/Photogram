import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/actionCreator";

class Header extends Component {
    render() {

        return (
            <div>
                <h1>Header Component</h1>
                {!this.props.auth ?
                    <h3 onClick={this.props.signIn}>Login</h3>:
                    <h3 onClick={this.props.signOut}>{this.props.auth.displayName}</h3>
                }
            </div>
        )
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { signIn, signOut})(Header);