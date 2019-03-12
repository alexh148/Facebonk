import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      userEmail: "HOWDY HO!",
      userName: "OH YEAH!"
    };
    this.signup = this.signup.bind(this);
  }

  // Receive Google response and "Google" type.
  signup(res, type) {
    let data;
    // Set Data
    if (type === "google" && res.w3.U3) {
      // From response set JSON for Database Query
      // From response set JSON for Database Query
      let sanitizedEmail = res.w3.U3;
      sanitizedEmail = sanitizedEmail.replace(/\./g, "-2e5");
      data = {
        name: res.w3.ig,
        provider: type,
        email: sanitizedEmail,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };

      if (data) {
        fetch(`/api/FacebonkUser/${data.email}`)
          .then(response => response.json())
          .then(users => {
            if (users.email) {
              console.log("User Exists");
              console.log(users.email);
              console.log(users.name);
              this.setState({
                userEmail: users.email,
                userName: users.name,
                redirect: true
              });
            }
          })
          .then(users => {
            if (data && this.state.redirect === false) {
              fetch("/api/FacebonkUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
              }).then(response => {
                // Set Redirect to True
                console.log("New User Added");
                this.setState({
                  userEmail: data.email,
                  userName: data.name,
                  redirect: true
                });
              });
            } else {
            }
          });
      }
    }
  }

  render() {
    if (this.state.redirect === true || sessionStorage.getItem("userData")) {
      return (
        <Redirect
          to={{
            pathname: "/home",
            state: {
              userEmail: this.state.userEmail,
              userName: this.state.userName
            }
          }}
        />
      );
    }

    // Receive reponse from Google
    const responseGoogle = response => {
      console.log("google console");
      console.log(response);
      // Forward information to Signup Method
      this.signup(response, "google");
    };

    return (
      <div className="row body">
        <GoogleLogin
          clientId="478373276781-nmt6nais5n44vnu8er2aei1ldvtfd7fv.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}
