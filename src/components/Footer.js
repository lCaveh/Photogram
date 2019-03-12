import React from 'react'
import { NavLink } from "react-router-dom"

function Footer(props) {

    return (
        <div >
            <nav className="uk-navbar-container uk-position-bottom uk-position-fixed footer" data-uk-navbar>
                <div className="uk-navbar-center">

                    <div className="uk-navbar">
                        <NavLink to="/profile" className="uk-navbar-toggle">Profile</NavLink>
                    </div>
                    <div className="uk-navbar ">
                        <NavLink to="/privateposts" className="uk-navbar-toggle">Private</NavLink>
                    </div>
                    <div className="uk-navbar uk-active">
                        <NavLink to="/" className="uk-navbar-toggle">All Posts</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Footer