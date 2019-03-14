import React, { Component } from "react";
import { MainLayout } from '../Layouts/MainLayout';
import { Post } from "../Post/Post";
import { Feed } from "../Feed/Feed";
import { FriendsList } from "../FriendsList/FriendsList";
import "./Home.css";


export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);

    this.state = {
      userName: sessionStorage.getItem("userName"),
      userEmail: sessionStorage.getItem("userEmail")
    };
  }

  render() {
    console.log(`State Name: ${this.state.userName}`);
    console.log(`State Email: ${this.state.userEmail}`);
    console.log(`Storage Name: ${sessionStorage.getItem("userName")}`);
    console.log(`Storage Email: ${sessionStorage.getItem("userEmail")}`);

    return (
      <MainLayout>
        <h1 id ="homeHeader">Welcome to Facebonk, {this.state.userName}</h1>
        <div>
          <Post userName={this.state.userName} />
          <Feed />
        </div>
      </MainLayout>
    );
  }
}
