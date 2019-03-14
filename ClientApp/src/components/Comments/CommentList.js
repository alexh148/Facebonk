﻿import React, { Component } from "react";
import { Comment } from "./Comment";

export class CommentList extends Component {
    render() {
        const commentNodes = this.props.data.map(comment => (
            <Comment author={comment.author} key={comment.id}>
                {comment.text}
            </Comment>
        ));
        return (
            <div className="commentList">{commentNodes}</div>
        );
    }
}