import React from "react";
import "./signin.css";

const SignIn = () => {
  return (
    <div className="signIn">
      <section className="signInBox">
        <h1 className="signInHeader">Sign In</h1>
        <form className="signInForm">
          <input placeholder="email" type="email" />
          <input placeholder="password" type="password" />
          <input className="submitBtn" type="submit" />
        </form>
      </section>
    </div>
  );
};

export default SignIn;
