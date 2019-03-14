﻿import React, { Component } from "react";

export class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: ''
        };
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        const author = this.props.post.user;
        const message = this.state.message.trim();
        const postId = this.props.post.id;
        if (!message) {
            return;
        }
        this.props.onCommentSubmit({ Author: author, Message: message, PostId: postId });
        this.setState({ message: '' });
    }
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.message}
                    onChange={this.handleMessageChange}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
}
