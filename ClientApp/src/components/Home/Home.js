import React, { Component } from "react";
import { Post } from "../Post/Post";
import { Feed } from "../Feed/Feed";
import { FriendsList } from "../FriendsList/FriendsList";

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.location.state.userName,
      userEmail: this.props.location.state.userEmail
    };
  }

  render() {
    console.log(this.state.userName);
    console.log(this.state.userEmail);
    console.log(
      `User Email from Login: ${this.props.location.state.userEmail}`
    );
    console.log(`User Name from Login: ${this.props.location.state.userName}`);

    return (
      <div>
        <h1>Welcome to Facebonk, {this.state.userName}</h1>
        <div>
          <Post userName={this.state.userName} />
          <Feed />
        </div>
      </div>
    );
  }
}
