import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:Auth2", () => {
      window.gapi.client.init({
        clientId:
          "795101043614-46e3j6v5hacohfhk87j1abja09819d02.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
