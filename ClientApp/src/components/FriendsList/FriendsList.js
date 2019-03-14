import React, { Component } from "react";
import "./FriendsList.css";

export class FriendsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      friendID: "",
      userEmail: sessionStorage.getItem("userEmail")
    };
    this.attemptToFriend = this.attemptToFriend.bind(this);
  }

  componentDidMount() {
    fetch("api/FacebonkUser")
      .then(response => response.json())
      .then(friends => {
        this.setState({ friends: friends });
      });
  }
  
  attemptToFriend() {
    fetch(`/api/FacebonkUser/${this.state.userEmail}/${this.state.friendID}`)
      .then(response => response.json())
      .then(friend => {
        // If data exists, gets and stores data locally
        if (friend.name) {
          console.log("Already friended that User!");
        }
        // Else, posts to DB and stores data locally.
        else {
          fetch(`/api/FacebonkUser/${this.state.userEmail}/${this.state.friendID}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.friendID)
          }).then(response => {
            console.log("Friended User");
          });
        }
      });
  }

  render() {
    // Change to this.state
    const friends = this.state.friends;

    return (
      <div id="friendWrapper">
        <h4 id="friendHeader">FaceBonk Users</h4>
        {friends.map(eachFriend => {
          return (
            <div id="eachFriend">
              <p id="friendName">
                eachFriend.name}
                <button
                  type="button"
             
                >
                  Friend!
                </button>
              </p>
              <p id="friendStatus">{eachFriend.status}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
