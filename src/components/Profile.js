import React from 'react'
import AddPost from './AddPost'
import UIkit from "uikit";

UIkit.grid();
function Profile(props) {

    return (
        <div>
            <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
                <div>
                    <div className="uk-card uk-card-default uk-card-body">Item</div>
                </div>
                <div>
                    <div className="uk-card uk-card-default uk-card-body"><AddPost></AddPost></div>
                </div>
                <div>
                    <div className="uk-card uk-card-default uk-card-body">Item</div>
                </div>
            </div>
            
        </div>
    )
}
export default Profile