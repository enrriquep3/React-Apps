import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:Auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "795101043614-46e3j6v5hacohfhk87j1abja09819d02.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
