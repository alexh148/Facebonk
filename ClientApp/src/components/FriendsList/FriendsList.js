import React, { Component } from 'react';
import "./FriendsList.css";

export class FriendsList extends Component {
  constructor(props) {
    super(props);

    this.state = [];
  }

  componentDidMount() {
    fetch("http://localhost:5000/friend")
      .then(response => response.json())
      .then(friends => {
        this.setState({ friends: friends });
      });
  }

  render() {
    // Change to this.state
    const friends = [
      {
        name: "Paul",
        status: "Sleeping"
      },
      {
        name: "Alex",
        status: "#Don't do it!"
      },
      {
        name: "John",
        status: "Teaching sucks but beer is good"
      }
    ];
    return (
      <div id="friendWrapper">
        <h1 id="friendHeader">Friends</h1>
        {friends.map(eachFriend => {
          return (
            <div id="eachFriend">
                <p id="friendName">{eachFriend.name}</p>
                <p id="friendStatus">{eachFriend.status}</p>
            </div>
          );
        })}
      </div>
    );
  }
}