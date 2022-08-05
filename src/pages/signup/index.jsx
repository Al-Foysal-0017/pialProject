import React from "react";
// import "./signin.css";

const SignUp = () => {
  return (
    <div className="signIn">
      <section className="signInBox">
        <h1 className="signInHeader">Sign Up</h1>
        <form className="signInForm">
          <input placeholder="Username" />
          <input placeholder="email" type="email" />
          <input placeholder="password" type="password" />
          <input className="submitBtn" type="submit" />
        </form>
      </section>
    </div>
  );
};

export default SignUp;
