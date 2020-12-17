import React from "react";
import Carrusel from "../components/Carrusel";
import Hero from '../components/Hero';

function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
    <Carrusel />
    </div>
  );
}

export default HomePage;
