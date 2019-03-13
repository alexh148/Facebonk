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

  signup(res, type) {
    let data;

    if (type === "google" && res.w3.U3) {
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

      // Check if Data Exists in DB
      if (data) {
        fetch(`/api/FacebonkUser/${data.email}`)
          .then(response => response.json())
          .then(users => {
            // If data exists stores data locally
            if (users.email) {
              this.setState({ redirect: true });
              sessionStorage.setItem("userEmail", users.email);
              sessionStorage.setItem("userName", users.name);
            }
            // Else creates new entry in DB, and stores data locally.
            else {
              fetch("/api/FacebonkUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
              }).then(response => {
                this.setState({ redirect: true });
                sessionStorage.setItem("userEmail", data.email);
                sessionStorage.setItem("userName", data.name);
              });
            }
          });
      }
    }
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to={"/home"} />;
    }

    // Receive reponse from Google
    const responseGoogle = response => {
      console.log("google console");
      console.log(response);
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
