import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const pageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Navegate to page two</Link>
    </div>
  );
};
const pageTwo = () => {
  return (
    <div>
      Pagetwo
      <button>clickme</button>
      <Link to="/">Navegate to page PageOne</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={pageOne} />
          <Route path="/pagetwo" component={pageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
