import React, { Component } from 'react';
import { Post } from '../Post/Post';
import { Feed } from '../Feed/Feed';
import { FriendsList } from '../FriendsList/FriendsList';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <Post/>
            <Feed/>
      </div>
    );
  }
}