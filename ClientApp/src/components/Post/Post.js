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

    console.log(data);
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
console.log(`In Post: ${this.props.userName}`);
    return (
      <div id="postWrapper">
        <h1 id="header">Post</h1>
        <div id="postOuterContainer">
          <div id="postInnerContainer">
            <form onSubmit={this.handleSubmit} method="POST">
              <div class="row form">
                <div class="col-md-12">
                  <div class="form-group">
                    <label id="postMessage" class="col-form-label">
                      Message:
                    </label>
                    <textarea
                      class="form-control col"
                      id="messageArea"
                      placeholder="What's on your mind?"
                      rows="4"
                      name="message"
                      onChange={this.logChange}
                    />
                  </div>
                  <input type="submit" value="Post!" class="btn btn-success" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}