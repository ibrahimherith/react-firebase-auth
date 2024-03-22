import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import "animate.css";

const Home = () => {
  const navigate = useNavigate();

  //getting current signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("userid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  //Logging out the user
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        //sign-out succesful
        navigate("/");
        console.log("Signed out succesfully");
      })
      .catch((error) => {
        console.log("Error happened");
      });
  };

  return (
    <>
      <article className="card animate__animated animate__fadeInRight">
        <h1>Welcome</h1>
        <button onClick={handleLogout} className="button">
          Logout
        </button>
      </article>
    </>
  );
};

export default Home;
