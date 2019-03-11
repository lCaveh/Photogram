import React, { Component } from "react";
import * as actions from "../actions/actionCreator";
import { connect } from "react-redux";
import SinglePost from './SinglePost'

class AllPosts extends Component {
    componentWillMount() {
        this.props.fetchUser();
        this.props.fetchAllPosts();
    }
    render() {
        console.log("all posts")
        return (
            <div>
                {this.props.allposts === "loading" ?
                    <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>Loading</div> :
                    <div className="uk-grid-match uk-child-width-1-3@m uk-text-center" data-uk-grid>
                        {
                            Object.values(this.props.allposts).map((item) => {
                                return Object.keys(item).map((key)=>{
                                    return <div key={key}>
                                      <div className="uk-card uk-card-default uk-card-body">
                                          <SinglePost id={key} post={item[key]} />
                                      </div>
                                  </div>
                                })                              
                            })
                        }
                    </div>
                }
                <br/><br/><br/>
            </div>
        )
    }
}
const mapStateToProps = ({ allposts, auth }) => {
    return {
        allposts,
        auth
    };
};
export default connect(mapStateToProps, actions)(AllPosts);