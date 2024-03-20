import React from "react";
import img from "../assets/images/istockphoto-4.jpg";

const Intro = () => {
  return (
    <>
      <article className="intro-page">
        <h2 className="intro-header">R.F.A</h2>
        <img src={img} alt="" className="intro-img" />
        <p className="intro-desc">
          Welcome to React & Firebase Authentication Web application
        </p>
        <div className="intro-btn">
          <button className="btn btn-login">Login</button>
          <button className="btn">Sign up</button>
        </div>
      </article>
    </>
  );
};

export default Intro;
