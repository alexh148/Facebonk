import React, { Component } from "react";
import { Post } from "../Post/Post";
import { Feed } from "../Feed/Feed";
import { FriendsList } from "../FriendsList/FriendsList";

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);

    this.state = {
      userName: sessionStorage.getItem('userName'),
      userEmail: sessionStorage.getItem('userEmail')
    };
  }

  render() {
    console.log(`State Name: ${this.state.userName}`);
    console.log(`State Email: ${this.state.userEmail}`);
    console.log(`Storage Name: ${sessionStorage.getItem('userName')}`);
    console.log(`Storage Email: ${sessionStorage.getItem('userEmail')}`);
    
    return (
      <div>
        <h1>Welcome to Facebonk, {this.state.userName} </h1>
        <div>
          <Post userName={this.state.userName} />
          <Feed />
        </div>
      </div>
    );
  }
}
