import React, { Component } from "react";
import { CommentBox } from "../Comments/CommentBox";
import "./FullScreenPost.css";

export class FullScreenPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`/api/Facebonk/${id}`)
      .then(response => response.json())
      .then(post => {
        this.setState({ post: post });
      });
  }

  render() {
    return (
      <div id="postWrapper">
        <h1 id="header">Post</h1>
        <div id="postOuterContainer">
          <div id="postInnerContainer">
            <h1>{this.state.post.user} said...</h1>
            <form>
              <div className="row form">
                <div className="col-md-12">
                  <div className="form-group">
                    <label id="postMessage" className="col-form-label">
                      Message:
                    </label>
                    <textarea
                      readOnly
                      className="form-control col"
                      id="messageArea"
                      placeholder="What's on your mind?"
                      rows="4"
                      name="message"
                      value={this.state.post.message}
                    />
                  </div>
                  <p>
                    Posted At:{" "}
                    {new Date(this.state.post.posted_At).toLocaleString()}
                  </p>
                  <button type="button">Add Comment!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <CommentBox post={this.state.post} />
      </div>
    );
  }
}
