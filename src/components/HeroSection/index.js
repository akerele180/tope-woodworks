import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css";
import Left from "../../assets/images/Group 14.png";
import Middle from "../../assets/images/Group 15.png";
import Right from "../../assets/images/Group 16.png";
import { Button } from "components/Button";

export const HeroSection = () => {
  return (
    <main>
      <Navbar />
      <section className="hero-section">
        <div className="col-1">
          <h1>For the home of tomorrow</h1>
          <p className="hero-text">
            We design sustainable furnitures. Find a piece from our large
            collection of luxurious interiors designed by professional interior
            designers.
          </p>
          <Button type="button" className="" title="Explore Products" />
        </div>
        <div className="col-2">
          <img className="left-img" src={Left} alt="left-furniture" />
          <img className="middle-img" src={Middle} alt="middle-furniture" />
          <img className="right-img" src={Right} alt="right-furniture" />
        </div>
      </section>
      <div className="blank-white"></div>
    </main>
  );
};
