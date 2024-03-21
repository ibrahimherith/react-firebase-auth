import React, { useState } from "react";
import { Link } from "react-router-dom";

//Firebase authentication / functions
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

//page animation
import "animate.css";

//icons
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function to handle form when login details are submitted
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log("This error");
      }
      setEmail("");
      setPassword("");
    } else {
      console.log("Please enter email and password");
    }
  };

  //function to handle sign in with google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <article className="card animate__animated animate__fadeInRight">
        <h1>Login</h1>
        <form action="" onSubmit={handleLoginSubmit} className="form">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. example@mail.com"
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button type="submit" className="button">
            Login
          </button>
        </form>

        <button onClick={signInWithGoogle} className="button-google">
          <FcGoogle size={20} /> Continue with Google
        </button>
        <p>
          Don't have an account?{" "}
          <span className="text-brandPurple hover:underline">
            <br className="block lg:hidden" />
            <Link to={"/signup"}>Create account</Link>
          </span>
        </p>
      </article>
    </>
  );
};

export default Login;
