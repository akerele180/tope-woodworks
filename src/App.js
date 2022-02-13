import React from "react";
import "./App.css";
import { HeroSection } from "./components/HeroSection";
import BrandedProducts from "components/BrandedProducts";
import { Newsletter } from "components/Newsletter";
import { Shelf } from "components/Shelf";
import { Cofee } from "components/Cofee";
import { OurProducts } from "components/OurProducts";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <BrandedProducts />
      <Cofee />
      <Shelf />
      <OurProducts />
      <Newsletter />
    </div>
  );
}

export default App;
