﻿import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Likes } from "../Likes/Likes";
import "./Feed.css";

export class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getFeed(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  getFeed() {
    fetch("/api/Facebonk")
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }

  render() {
    // Change to this.state
    const { posts } = this.state;

    return (
      <div>
        <h1 id="header">Feed</h1>
        {posts.map(eachPost => {
          var prettyDate = eachPost.posted_At;
          var parts = prettyDate.slice(0, -1).split("T");
          var datey =
            parts[0].slice(8, 10) +
            "/" +
            parts[0].slice(5, 7) +
            "/" +
            parts[0].slice(0, 4);
          var timey = parts[1].slice(0, 5);
          return (
            <div id="eachPost" key={eachPost.id}>
              <div id="innerPost">
                <h1 id="userFeed">{eachPost.user} said... </h1>
                <p id="message">{eachPost.message}</p>

                <div>
                  <p id="postedAt">
                    Posted at: {timey} on {datey}{" "}
                  </p>
                </div>

                <div id="likes_space">
                  <Likes thisPost={eachPost} />

                  <Link to={`/feed/${eachPost.id}`}>
                    <button id="comment">Comment</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
