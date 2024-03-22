import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Firebase authentication & functions
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

//page animations
import "animate.css";

//icons
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //function to handle data on creating account
  const handleCreateAccount = async (e) => {
    e.preventDefault();

    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          await createUserWithEmailAndPassword(auth, email, password).then(
            (userCredintial) => {
              //signed in
              const user = userCredintial.user;
              console.log(user);
              navigate("/");
            }
          );
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        }
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        console.log("Password does not match!");
        setPassword("");
        setConfirmPassword("");
      }
    }
  };

  //creating account with google function
  const createAccountWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((userCredintial) => {
        //signed in
        const user = userCredintial.user;
        console.log(user);
        navigate("/");
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <>
      <article className="card animate__animated animate__fadeInRight">
        <h1>Create account</h1>
        <form action="" onSubmit={handleCreateAccount} className="form">
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
                placeholder="At least 8 characters"
                required
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="At least 8 characters"
                required
              />
            </div>
          </div>
          <button type="submit" className="button">
            Create new account
          </button>
        </form>

        <button onClick={createAccountWithGoogle} className="button-google">
          <FcGoogle size={20} /> Create account with Google
        </button>
        <p>
          Already have an account?{" "}
          <span className="text-brandPurple hover:underline">
            <br className="block lg:hidden" />
            <Link to={"/"}>Login</Link>
          </span>
        </p>
      </article>
    </>
  );
};

export default Signup;
