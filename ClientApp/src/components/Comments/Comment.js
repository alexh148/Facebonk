import React, { Component } from "react";
import "./Comment.css";

export class Comment extends Component {
  render() {
    return (
      <div id="postOuterContainer">
        <div id="postInnerContainer">
          <div className="comment">
            <h2 className="commentAuthor">{this.props.author} commented...</h2>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
