import React from "react";
import "./style.css";
import Fbi from "../../assets/images/Furniture Brands International Logo.png";
import Cleavland from "../../assets/images/Kronheimsfurniture Logo undefined.png";
import Booking from "../../assets/images/Booking.com Logo.png";
import Basset from "../../assets/images/Bassett Furniture Industries Logo.png";
import Furniture from "../../assets/images/Furniture Row Icon.png";

export default function BrandedProducts() {
  return (
    <section className="brands">
      <h2>120+</h2>
      <p className="brand-text">Branded products</p>
      <div className="brands-logo">
        <img src={Fbi} alt="furniture-brands-logo" />
        <img src={Cleavland} alt="kronheims-logo" />
        <img src={Booking} alt="booking-logo" />
        <img src={Basset} alt="basset-logo" />
        <img src={Furniture} alt="furniture-logo" />
      </div>
    </section>
  );
}
