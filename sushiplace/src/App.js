import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from './components/Hero';
import Products from "./components/Products";
import { productData, productDataTwo } from './components/Products/data';
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading=' Your favorite Japanese restaurant. Dine in, Pick up or Delivery' data={productData}/>
    <Feature />
    <Products heading='Enjoy our Sweet Treats' data={productDataTwo}/>
    <Footer />
    </Router>
  );
}

export default App;
