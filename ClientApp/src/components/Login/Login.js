import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";
import "./Login.css";

function newUserCheck(email) {
  console.log(`4th: Start Email: ${email}`);
  fetch(`/api/FacebonkUser/${email}`)
    .then(response => response.json())
    .then(users => {
      console.log(`5th: ${users[0]}`);
      if (users[0]) {
        console.log("6th: newUserCheck False");
        return false;
      } else {
        console.log("6th: newUserCheck True");
        return true;
      }
    });
}

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    };
    this.signup = this.signup.bind(this);
  }

  // Receive Google response and "Google" type.
  signup(res, type) {
    let data;
    // Set Data
    if (type === "facebook" && res.email) {
      data = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.picture.data.url
      };
    }
    if (type === "google" && res.w3.U3) {
      // From response set JSON for Database Query
      let sanitizedEmail = res.w3.U3;
      sanitizedEmail = sanitizedEmail.replace(/\./g, "-2e5");
      console.log(`2nd: ${sanitizedEmail}`);
      data = {
        name: res.w3.ig,
        provider: type,
        email: sanitizedEmail,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }
    console.log(`3rd: ${data}`);

    if (newUserCheck(data.email)) {
      // Post to Database
        fetch("/api/FacebonkUser", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        }
      ).then(response => {
        // Set Redirect to True
        console.log("7th: New User Added");
        this.setState({ redirect: true });
      });
    } else {
      console.log("7th: User Already Added");
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect || sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }

    // Recieve response from Facebook
    const responseFacebook = response => {
      console.log("facebook console");
      console.log(response);
      // Forward information to Signup Method
      this.signup(response, "facebook");
    };

    // Receive reponse from Google
    const responseGoogle = response => {
      console.log("1st google console");
      // Forward information to Signup Method
      this.signup(response, "google");
    };

    return (
      <div className="row body">
        <FacebookLogin
          appId="1981820781943958"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />
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
