import React from "react";
import ButtonFB from "./ButtonFB";
import ButtonGoogle from "./ButtonGoogle";
import Form from "./Form";
import RegistrationValidation from "./RegistrationValidation";

const Registration = () => {
  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
  };

  const handleButtonClick = () => {};

  return (
    <div className="form">
      <h1>Get Started</h1>
      <p>Already have an account?</p>
      <a className="LogIn" href="#">
        Log In
      </a>
      <br></br>
      <ButtonGoogle onClick={handleButtonClick} />
      <ButtonFB onClick={handleButtonClick} />
      <p className="Or">Or</p>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Registration;
