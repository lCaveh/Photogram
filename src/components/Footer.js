import React from 'react'
import { NavLink } from "react-router-dom"

function Footer(props) {

    return (
        <div>
            <h1>Footer Component</h1>
            <nav>
                <NavLink to="/addpost">
                    <p>Add-Post</p>
                </NavLink>
            </nav>
        </div>
    )
}
export default Footer