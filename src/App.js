import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AllPosts from './components/AllPosts';
import PrivatePosts from './components/PrivatePosts';
import Profile from './components/Profile';
import Post from './components/Post';
import Header from './components/Header';
import Footer from './components/Footer';

import { fetchUser } from "./actions/actionCreator";

import { connect } from "react-redux";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="uk-container">
          <Header />
          <Footer />
          <Switch>
            <Route path='/' component={AllPosts} exact />
            <Route path='/privateposts' component={PrivatePosts} />
            <Route path="/profile" component={Profile} />
            <Route path="/:userid/post/:id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default connect(null, { fetchUser })(App);
