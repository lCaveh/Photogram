import React from 'react'
import { NavLink } from "react-router-dom"

function Footer(props) {

    return (
        <div className="footer">
            <nav className="uk-navbar uk-navbar-container uk-margin">
                <div className="uk-navbar-left">
                    <NavLink to="/profile" className="uk-navbar-toggle">Profile</NavLink>
                </div>
                <div className="uk-navbar-left">
                    <NavLink to="/privateposts" className="uk-navbar-toggle">Private</NavLink>
                </div>
                <div className="uk-navbar-left">
                    <NavLink to="/" className="uk-navbar-toggle">All Posts</NavLink>
                </div>

            </nav>

        </div>
    )
}
export default Footer