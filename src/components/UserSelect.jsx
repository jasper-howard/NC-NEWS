import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../api";
import "../component css/List-Article.css";
import { UserContext } from "../context/userContext";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// to do:
// add password field
// confirm keys don't need to be hidden
// catch errors
// mesh new users with default users
// style
// clear up other files like firebase.js
export const app = initializeApp({
  apiKey: "AIzaSyAFy8TGAMnC62KddBf6sdAHXolMnfVSVyY",
  authDomain: "nc-news-18533.firebaseapp.com",
  projectId: "nc-news-18533",
  storageBucket: "nc-news-18533.appspot.com",
  messagingSenderId: "898933405821",
  appId: "1:898933405821:web:43c6286a1ece417b47d914",
  measurementId: "G-WVPX82WDYM",
});

export const auth = getAuth(app);
// how to set new users dont want email per say

// add add user endpoint to bc end
// add default user for people to click
// let firebase set id still
onAuthStateChanged(auth, (user) => {
  // change var name and put in component
  if (user !== null) {
    console.log("logged in");
    console.log(user);
  } else {
    console.log("no user");
  }
});

const UserSelect = () => {
  const [currEmail, setCurrEmail] = useState();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(UserContext);

  const password = "password123";

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  const handleCLick = (name) => {
    setUser(users.filter((x) => x.name === name)[0]);
  };

  const usersArray = users.map((user) => {
    //add div with context //decide username or name // h6 inside fix
    return (
      <Link to="/" key={user.name}>
        <div
          onClick={() => {
            handleCLick(user.name);
          }}
        >
          <p>{user.name}</p>
        </div>
      </Link>
    );
  });

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, currEmail, password)
      .then(() => {
        console.log("account made"); /// now try to sign in : )
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, currEmail, password)
      .then(() => {
        console.log("you're in pal"); /// now try to sign in : )
      })
      .catch((err) => {
        console.log("dint work pal");
      });
  };
  return loading ? (
    <p>Loading</p>
  ) : (
    <>
      <form onSubmit={handleSignup}>
        <label>sign up with email </label>
        <input
          value={currEmail}
          onChange={(event) => {
            setCurrEmail(event.target.value);
          }}
          placeholder="email"
          required="true"
        ></input>
        <button>submit</button>
      </form>
      <form onSubmit={handleLogin}>
        <label>sign up with email </label>
        <input
          value={currEmail}
          onChange={(event) => {
            setCurrEmail(event.target.value);
          }}
          placeholder="email"
          required="true"
        ></input>
        <button>submit</button>
      </form>
      <button
        onClick={() => {
          signOut(auth); /// add error handling
        }}
      >
        sign out
      </button>
      {usersArray}
    </>
  );
};

export default UserSelect;
