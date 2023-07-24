import React from "react";
import "./Button.css";

const ButtonGoogle = ({ onClick }) => {
  return (
    <button className="google" onClick={onClick}>
      <i className="fab fa-google"></i>sign up
    </button>
  );
};

export default ButtonGoogle;
