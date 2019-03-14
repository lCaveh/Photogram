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
                                    <img
                                        className="uk-comment-avatar uk-border-circle"
                                        src={this.props.auth.photoURL}
                                        width="20"
                                        height="20"
                                        alt="Border circle"
                                    />  {this.props.auth.displayName.split(' ')[0]}
                                </span>
                            )}</span>
                    </div>
                    <div className="uk-navbar-center uk-logo">
                            Photogram
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