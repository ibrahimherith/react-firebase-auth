import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <article className="card">
        <h1>Login</h1>
        <form action="" className="form">
          <div className="form-control">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-control">
              <IoMdMail size={20} className="icon" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g. example@mail.com"
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-control">
              <FaLock size={20} className="icon" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button type="submit" className="button">
            Login
          </button>
        </form>

        <button className="button-google">
          <FcGoogle size={20} /> Continue with Google
        </button>
        <p>
          Don't have an account?{" "}
          <span className="text-brandPurple hover:underline">
            <br className="block lg:hidden" />
            <a href="#">Create account</a>
          </span>
        </p>
      </article>
    </>
  );
};

export default Login;
