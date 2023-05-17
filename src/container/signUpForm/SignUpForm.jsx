import React, { useState } from "react";

import "./signUpForm.style.css";

const defaultFormData = {
  displayName: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const onChangeHandler = (e) => {
    console.log(e.target.name, ":", e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const carData = {
      brand: "",
      model: "",
      year: "",
    };

    const carData1 = { ...carData, brand: "Mercedes" };
    console.log("car data 1", carData1);
  };
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1> Sign Up: </h1>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="display"> Display Name </label>
          <input
            name="display"
            onChange={onChangeHandler}
            value={formData.displayName}
          />
          <label htmlFor="Password"> Password </label>
          <input
            name="password"
            onChange={onChangeHandler}
            value={formData.password}
          />
          <label htmlFor="Confirm Password"> Confirm Password</label>
          <input
            name="confirm passowrd"
            onChange={onChangeHandler}
            value={formData.confirmPassword}
          />
          <br></br>
          <button type="submit"> Sign Up </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
