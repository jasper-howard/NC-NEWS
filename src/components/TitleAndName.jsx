import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { StyleContext } from "../context/styleContext";
import { UserContext } from "../context/userContext";

const TitleAndName = () => {
  const { user } = useContext(UserContext);
  const { borderStyle } = useContext(StyleContext);
  const [welcome, setWelcome] = useState("login here");

  useEffect(() => {
    user.user === false
      ? setWelcome("login here")
      : setWelcome(`welcome  ${user.username}`);
  }, [user]);
  return (
    <section className="Welcome-Section">
      <Link to="/">
        <div>
          <h1 className="Title">
            NC
            <h6>
              THE WORLD <br />
              AT YOUR <br />
              THUMBS!
            </h6>
            NEWS
          </h1>
        </div>
      </Link>
      {/* <DivWithContext> */}
      <div className={`Title Welcome ${borderStyle}`}>
        <Link to="/login">
          <p>
            {/* {user.user === false ? "login here" : `welcome  ${user.username}`} */}
            {welcome}
          </p>
        </Link>
      </div>

      {/* </DivWithContext> */}
    </section>
  );
};

export default TitleAndName;
