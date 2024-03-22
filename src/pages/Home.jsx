import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut, deleteUser } from "firebase/auth";
import { auth } from "../config/firebase";
import "animate.css";

const Home = () => {
  const navigate = useNavigate();

  //getting current signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const name = user.displayName;
        const photo = user.photoURL;

        console.log("userid: ", uid);
        console.log("Name: ", name);
        console.log(photo);
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

  //delete account
  const handleDelete = () => {
    const user = auth.currentUser;

    deleteUser(user)
      .then(() => {
        //user deleted succesful
        navigate("/");
        console.log("User deleted succesfully");
      })
      .catch((error) => {
        console.log("Error happened");
      });
  };

  return (
    <>
      <article className="card animate__animated animate__fadeInRight">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
          maxime. Sunt mollitia doloremque omnis ex impedit veritatis in ratione
          et quas, dignissimos eius error, reprehenderit doloribus sapiente
          maxime, deleniti ea? Amet in enim asperiores? Odio eius ad aut
          sapiente laboriosam sunt, debitis deleniti libero.
        </p>
        <button onClick={handleLogout} className="button">
          Logout
        </button>
        <button onClick={handleDelete} className="button delete">
          Delete Account
        </button>
      </article>
    </>
  );
};

export default Home;
