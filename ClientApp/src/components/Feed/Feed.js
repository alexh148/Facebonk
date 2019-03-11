import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './Feed.css';

export class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
        posts: []
    };
  }

  componentDidMount() {
    fetch("/api/Facebonk")
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }

  render() {
    // Change to this.state
    const { posts } = this.state 

    return (
      <div>
        <h1 id="header">Feed</h1>
        {posts.map(eachPost => {
          return (
            <div id="eachPost">
              <div id id="innerPost">
              <h1 id="userFeed">{eachPost.user}</h1>
              <p id="message">{eachPost.message}</p>
              <div>
              <p id="postedAt">Posted at: {eachPost.posted_At}</p>
            <button id="like">Like</button>
                <button id="edit">Edit</button>
            </div>
</div>
</div>
          );
        })}
      </div>
    );
  }
}