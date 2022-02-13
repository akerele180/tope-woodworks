import React from "react";
import './style.css'
import Search from "../../assets/images/Search.png";
import Bag from "../../assets/images/Bag.png";

export default function Navbar() {
  return (
    <header>
      <h2 className="logo">Woods</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>Produce</li>
          <li>Discover</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="actions-btn">
        <div className="search">
          <img src={Search} alt="search-icon" />
        </div>
        <div className="bag">
          <img src={Bag} alt="bag-icon" />
        </div>
      </div>
    </header>
  );
}
