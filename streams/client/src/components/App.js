import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const pageOne = () => {
  return <div>PageOne</div>;
};
const pageTwo = () => {
  return <div>Pagetwo
      <button>clickme</button>
  </div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
         <Route path="/" exact component={pageOne} />
          <Route path="/" exact component={pageOne} />
          <Route path="/pagetwo" component={pageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
