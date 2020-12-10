import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/searchBar";

const API_KEY = "AIzaSyBq819BlwloHyW1vUElcy84fH0xwmH55t0";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
