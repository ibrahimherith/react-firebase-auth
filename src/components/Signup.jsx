import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <>
      <article className="card">
        <h1>Create account</h1>
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
                placeholder="At least 8 characters"
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <div className="input-control">
              <FaLock size={20} className="icon" />
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="At least 8 characters"
              />
            </div>
          </div>
          <button type="submit" className="button">
            Create new account
          </button>
        </form>

        <button className="button-google">
          <FcGoogle size={20} /> Continue with Google
        </button>
        <p>
          Already have an account?{" "}
          <span className="text-brandPurple hover:underline">
            <br className="block lg:hidden" />
            <a href="#">Login</a>
          </span>
        </p>
      </article>
    </>
  );
};

export default Signup;
