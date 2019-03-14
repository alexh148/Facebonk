import React, { Component } from "react";
import { Comment } from "./Comment";
import "./Comment.css";

export class CommentList extends Component {
  render() {
    const commentNodes = this.props.data.map(comment => (
      <Comment author={comment.author} key={comment.id}>
        {comment.message}
      </Comment>
    ));
    return <div className="commentList">{commentNodes}</div>;
  }
}
