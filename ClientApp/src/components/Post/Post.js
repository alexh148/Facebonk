import React, { Component } from "react";
import "./Post.css";

export class Post extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.logChange = this.logChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      user: this.props.userName,
      message: this.state.message,
      posted_At: new Date()
    };

    fetch("/api/Facebonk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(response => response)
  }

  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    return (
      <div id="postWrapper">
        <h1 id="header">Post</h1>
        <div id="postOuterContainer">
          <div id="postInnerContainer">
            <form onSubmit={this.handleSubmit} method="POST">
              <div className="row form">
                <div className="col-md-12">
                  <div className="form-group">
                    <label id="postMessage" className="col-form-label">
                      Message:
                    </label>
                    <textarea
                      className="form-control col"
                      id="messageArea"
                      placeholder="What's on your mind?"
                      rows="4"
                      name="message"
                      onChange={this.logChange}
                    />
                  </div>
                  <input type="submit" value="Post!" id="postButton" className="btn btn-success" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
