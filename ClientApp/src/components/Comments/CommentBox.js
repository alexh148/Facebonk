import React, { Component } from "react";
import { CommentList } from "./CommentList";
import { CommentForm } from "./CommentForm";
import "./Comment.css";

export class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    loadCommentsFromServer() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', `/api/comment/${this.props.post.id}`, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        };
        xhr.send();
    }
    handleCommentSubmit(comment) {
        const data = {
          author: comment.Author,
          message: comment.Message,
          posted_At: new Date(),
          postId: comment.PostId
        }

        fetch("/api/comment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
    }
    componentDidMount() {
      window.setInterval(
        () => this.loadCommentsFromServer(),
        1000,
      );
    }

    render() {
        return (
            <div className="eachPost">
                <h3>Add a new comment </h3>

                <CommentForm onCommentSubmit={this.handleCommentSubmit} post={this.props.post} />
                <CommentList data={this.state.data} />
            </div>
        );
    }
}
