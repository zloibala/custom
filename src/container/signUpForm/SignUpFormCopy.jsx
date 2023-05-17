import "./signUpForm.style.css";
import React, { useState } from "react";

const DefaultData = {
  username: "",
  password: "",
};

const SignUpFormCopy = () => {
  const [userData, setUserData] = useState(DefaultData);
  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted", userData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1> Sign Up Copy:</h1>
        <form onSubmit={onSubmitHandler}>
          <label> User name </label>
          <input
            name="username"
            onChange={onChangeHandler}
            value={userData.username}
          />
          <label> Password</label>
          <input
            name="password"
            onChange={onChangeHandler}
            value={userData.password}
          />
          <br></br>
          <button> Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpFormCopy;
