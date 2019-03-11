import React from 'react'
import AddPost from './AddPost'
import ProfileDetail from './ProfileDetail'
import UIkit from "uikit";

UIkit.grid();
function Profile(props) {

    return (
        <div>
            <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
                <div>
                    <ul data-uk-accordion>
                        <li className="uk-card uk-card-default uk-card-body uk-text-left">
                            <a className="uk-accordion-title">Profile Detail</a>
                            <div className="uk-accordion-content">
                                <div ><ProfileDetail></ProfileDetail></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul data-uk-accordion>
                        <li className="uk-card uk-card-default uk-card-body uk-text-left">
                            <a className="uk-accordion-title">Add New Post</a>
                            <div className="uk-accordion-content">
                                <div ><AddPost></AddPost></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul data-uk-accordion>
                        <li className="uk-card uk-card-default uk-card-body uk-text-left">
                            <a className="uk-accordion-title">Private Messages</a>
                            <div className="uk-accordion-content">
                                <div ><p>This feature is not available yet</p></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Profile