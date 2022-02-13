import React from "react";

export const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.class}
      style={{
        background: "#623b1c",
        border: "0",
        borderRadius: "5px",
        color: "#ffffff",
        cursor: "pointer",
        fontSize: "1em",
        outline: "none",
        padding: "10px 25px",
        textTransform: "capitalize",
      }}
    >
      {props.title}
    </button>
  );
};
