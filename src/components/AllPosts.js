import React, { Component } from "react";
import * as actions from "../actions/actionCreator";
import { connect } from "react-redux";
import SinglePost from './SinglePost'
import Loading from '../images/loading.gif'


class AllPosts extends Component {
    componentWillMount() {
        this.props.fetchUser();
        this.props.fetchAllPosts();
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {!this.props.allposts || this.props.allposts === "loading" ?
                    <div className="uk-position-center" ><img className="loading" src={Loading}/></div> :
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
                <br/><br/><br/><br /><br />
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