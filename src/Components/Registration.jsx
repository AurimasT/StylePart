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
  const handleRegistration = ({ name, email, password, isValid, errors }) => {
    if (isValid) {
      console.log("Registration data:", { name, email, password });
    } else {
      console.log("Validation errors:", errors);
    }
  };

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
      <RegistrationValidation>{handleRegistration}</RegistrationValidation>
    </div>
  );
};

export default Registration;
