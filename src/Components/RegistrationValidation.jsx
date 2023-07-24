import React, { useState } from "react";

const RegistrationValidation = ({ children }) => {
  const name = useState("");
  const email = useState("");
  const password = useState("");
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    // Validation logic
    const validationErrors = {};

    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    }

    if (password.trim() === "") {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    // Call the children (render) function with form data and errors
    if (Object.keys(validationErrors).length === 0) {
      children({ name, email, password, isValid: true });
    } else {
      children({ name, email, password, isValid: false, errors });
    }
  };
};

export default RegistrationValidation;
