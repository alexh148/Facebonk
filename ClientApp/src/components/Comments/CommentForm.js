import React, { Component } from "react";

export class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { author: '', message: '' };
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }
    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        const author = this.state.author.trim();
        const message = this.state.message.trim();
        const postId = this.props.post.id;
        if (!message || !author) {
            return;
        }
        this.props.onCommentSubmit({ Author: author, Message: message, PostId: postId });
        this.setState({ author: '', message: '' });
    }
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
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
