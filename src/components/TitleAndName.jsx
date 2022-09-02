import React from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { StyleContext } from "../context/styleContext";
import { UserContext } from "../context/userContext";

const TitleAndName = () => {
  const { user } = useContext(UserContext);

  const { borderStyle } = useContext(StyleContext);
  // change welcome <p> to something with change user
  // make THE WORLD AT... appear in correct place on desktop
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
            {user.user === false ? "login here" : `welcome  ${user.username}`}
          </p>
        </Link>
      </div>

      {/* </DivWithContext> */}
    </section>
  );
};

export default TitleAndName;
