import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/actionCreator";

class Header extends Component {
    render() {

        return (
            <div className="header">
                <nav className="uk-navbar uk-navbar-container uk-margin">

                    <div className="uk-navbar-left">
                        <span className="uk-navbar-toggle">{!this.props.auth ? (
                            <span onClick={this.props.signIn}>LogIn</span>
                        ) : (
                                <span onClick={this.props.signOut}>
                                    {this.props.auth.displayName}{" "}
                                </span>
                            )}</span>
                    </div>
                </nav>
            </div>
        )
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { signIn, signOut })(Header);