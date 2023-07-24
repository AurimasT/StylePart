import React from "react";
import "./Button.css";

const ButtonFB = ({ onClick }) => {
  return (
    <button className="fb" onClick={onClick}>
      <i class="fa-brands fa-facebook"></i>sign up
    </button>
  );
};

export default ButtonFB;
