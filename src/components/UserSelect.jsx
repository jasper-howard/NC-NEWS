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
} from "firebase/auth";

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

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("logged in");
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
      <>
        <Link to="/" key={user.name}>
          <div
            onClick={() => {
              handleCLick(user.name);
            }}
          >
            <p>{user.name}</p>
          </div>
        </Link>
      </>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, currEmail, password);
    console.log("account made"); /// now try to sign in : )
  };
  return loading ? (
    <p>Loading</p>
  ) : (
    <>
      <form onSubmit={handleSubmit}>
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
      {usersArray}
    </>
  );
};

export default UserSelect;
