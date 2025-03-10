import React from "react";
import style from "./Button.module.css";

function Button({ buttonClicked }) {
  const items = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  const funclick = (e) => {
  
    let value = e.target.id;
    buttonClicked(value);
  };

  return (
    <div className={`button-container ${style.container}`}>
      {items.map((item) => {
        return (
          <button
            key={item}
            className={`item ${style.item}`}
            id={item}
            onClick={(e) => {
              funclick(e);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
