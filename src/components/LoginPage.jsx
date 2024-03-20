import React from "react";

const LoginPage = () => {
  return (
    <>
      <article className="login-page">
        <h2>Sign in to Everwill</h2>
        <form action="" className="form">
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            placeholder="Password (8+ Characters)*"
          />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <p>or</p>
        <button className="btn">Continue with Google</button>
        <p href="#">
          New? <a>signup</a> for everwill.
        </p>
      </article>
    </>
  );
};

export default LoginPage;
