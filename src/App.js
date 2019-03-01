
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AllPosts from './components/AllPosts'
import PrivatePosts from './components/PrivatePosts'
import Profile from './components/Profile'
import Post from './components/Post'
import Header from './components/Header'
import Footer from './components/Footer'

import { Provider } from 'react-redux'
import store from './store'

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Footer />
        <Switch>
          <Route path='/' component={AllPosts} exact />
          <Route path='/privateposts' component={PrivatePosts} />
          <Route path="/profile" component={Profile} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

export default App;
