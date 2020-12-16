import React, { Component } from "react";

import { Cards, Charts, CountryPicker } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Cards />
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}

export default App;
