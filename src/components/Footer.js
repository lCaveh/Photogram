import React from 'react'
import { NavLink } from "react-router-dom"
import UIkit from "uikit";

function Footer(props) {

    return (
        <div className="footer">
            <nav className="uk-navbar-container uk-margin" data-uk-navbar>
            <div className="uk-navbar-center">

                <div className="uk-navbar-left">
                    <NavLink to="/profile" className="uk-navbar-toggle">Profile</NavLink>
                </div>
                <div className="uk-navbar-center">
                    <NavLink to="/privateposts" className="uk-navbar-toggle">Private</NavLink>
                </div>
                <div className="uk-navbar-right uk-active">
                    <NavLink to="/" className="uk-navbar-toggle">All Posts</NavLink>
                </div>
            </div>

            </nav>

        </div>
    )
}
export default Footer