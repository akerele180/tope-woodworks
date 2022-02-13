import React from "react";
import "./style.css";
import ShelfImage from "../../assets/images/shelf.png";
import { Button } from "components/Button";

export const Shelf = () => {
  return (
    <section className="shelf">
      <div className="shelf-image">
        <img src={ShelfImage} alt="standing-shelf" />
      </div>
      <div className="shelf-text">
        <h3>the shelf</h3>
        <p>
          A modern shelf that fits perfectly. When it comes to modularity, the
          limit is endless. Start with one shelf and add expansion units and
          add-ons to build a shelving system that works perfectly in your space
          - either in your home or office.
        </p>
        <Button class="" type="button" title="shop now &#8594;" />
      </div>
    </section>
  );
};
