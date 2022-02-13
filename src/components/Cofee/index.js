import React from "react";
import "./style.css";
import { Button } from "components/Button";
import CofeeTable from "../../assets/images/coffee-table.png";

export const Cofee = () => {
  return (
    <section className="cofee-section">
      <div className="cofee-image">
        <img src={CofeeTable} alt="cofee-table" />
      </div>
      <div className="cofee-text">
        <h3>cofee table</h3>
        <p>
          The perfect companion for your sofa. Rigid, wooden legs attach in
          seconds to a surface sized to fit everything you need close to you.
          Available in oval or round.
        </p>
        <Button class="" type="button" title="shop now &#8594;" />
      </div>
    </section>
  );
};
