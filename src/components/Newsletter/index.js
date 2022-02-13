import { Button } from "components/Button";
import React, { useState } from "react";
import "./style.css";

export const Newsletter = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    console.log(input);
  };
  return (
    <section className="newsletter">
      <h3> Subscribe to our Newsletter</h3>
      <p>
        Get a 20% OFF (plus the latest furniture news and <br />
        product launches) just by subscribing to our newsletter.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button type="submit" class="" title="Subscribe" />
      </form>
    </section>
  );
};
