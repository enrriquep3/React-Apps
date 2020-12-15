import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

function Feature() {
  return (
    <FeatureContainer>
      <h1>Sushi of the day</h1>
      <p>Shrimp Tempura roll</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
}

export default Feature;
