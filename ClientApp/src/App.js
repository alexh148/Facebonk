import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Post } from './components/Post/Post';
import { Feed } from './components/Feed/Feed';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/post' component={Post} />
        <Route path='/feed' component={Feed} />
      </Layout>
    );
  }
}