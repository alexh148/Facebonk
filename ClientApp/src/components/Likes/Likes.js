import React, { Component } from "react";
import "./Likes.css";

export class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postLikes: this.props.thisPost.likes,
      postId: this.props.thisPost.id
    };
    this.incrementLikes = this.incrementLikes.bind(this);
  }

  incrementLikes() {
    let likesCounter = this.state.postLikes;
    likesCounter++;

    this.setState({ postLikes: likesCounter });
    console.log(`Likes after Increment: ${this.state.postLikes}`);


     const data = {
      id: this.state.postId,
      likes: likesCounter
    };

    fetch(`/api/Facebonk`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  render() {
    return (
      <div>
        <button id="likeButton" onClick={this.incrementLikes}>
           Like This Post! - {this.state.postLikes} Likes
        </button>
      </div>
    );
  }
}
