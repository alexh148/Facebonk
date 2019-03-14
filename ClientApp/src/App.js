import React, { Component } from "react";
import { Route } from "react-router";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { FullScreenPost } from "./components/FullScreenPost/FullScreenPost";


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/feed/:id" component={FullScreenPost} />
     </div>
    );
  }
}
