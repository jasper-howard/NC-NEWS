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
import DivWithContext from "./DivWithContext.jsx";
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

// add add user endpoint to bc end
// add default user for people to click
// let firebase set id still
// add username and name input to sign up field
// .then the handle sign up to make be post
// .then the handle login to make be get
// after be interaction set user context

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("logged in");
    console.log(user);
  } else {
    console.log("no user");
  }
});

const UserSelect = () => {
  const [newUserEmail, setNewUserEmail] = useState();
  const [userEmail, setUserEmail] = useState();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUserPassword, setNewUserPassword] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

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
    createUserWithEmailAndPassword(auth, newUserEmail, newUserPassword)
      .then(() => {
        console.log("account made");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
        console.log("login successful");
      })
      .catch((err) => {
        console.log("login unsuccessful");
      });
  };
  return loading ? (
    <p>Loading</p>
  ) : (
    <>
      <DivWithContext>
        <h2 className="Title">DEFAULT USERS:</h2>
        <p>CLICK TO LOGIN QUICKLY</p>
        <div className="Default_user_flex">{usersArray}</div>
      </DivWithContext>
      <DivWithContext>
        <h1 className="Title">SIGN UP</h1>
        <form onSubmit={handleSignup}>
          <label>sign up with email </label>
          <input
            value={newUserEmail}
            onChange={(event) => {
              setNewUserEmail(event.target.value);
            }}
            placeholder="email"
            required={true}
          ></input>
          <label>set password</label>
          <input
            type="password"
            name="password"
            value={newUserPassword}
            onChange={(event) => {
              setNewUserPassword(event.target.value);
            }}
            placeholder="password"
            required={true}
          ></input>
          <button>submit</button>
        </form>
      </DivWithContext>
      <DivWithContext>
        <h1 className="Title">SIGN IN</h1>

        <form onSubmit={handleLogin}>
          <label>sign in with email </label>
          <input
            value={userEmail}
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}
            placeholder="email"
            required={true}
          ></input>
          <label>password</label>
          <input
            type="password"
            name="password"
            value={userPassword}
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
            placeholder="password"
            required={true}
          ></input>
          <button>submit</button>
        </form>
      </DivWithContext>
      <DivWithContext>
        <h1 className="Title">SIGN OUT</h1>

        <button
          onClick={() => {
            signOut(auth);
            setUser({ user: false });
          }}
        >
          sign out
        </button>
      </DivWithContext>
    </>
  );
};

export default UserSelect;
