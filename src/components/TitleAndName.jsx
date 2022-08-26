import React from "react";
import { Link } from "react-router-dom";
import NC_DIV from "./NC_DIV";
import { useContext } from "react";
import { StyleContext } from "../context/styleContext";

const TitleAndName = ({ user: { user } }) => {
  const { borderStyle } = useContext(StyleContext);

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
      {/* <NC_DIV> */}
      <div className={`Title Welcome ${borderStyle}`}>
        <p>
          Welcome
          <br />
          {user.username}
          {/* <img className="Avatar" src={user.avatar_url} alt="avatar pic" /> */}
        </p>
      </div>
      {/* </NC_DIV> */}
    </section>
  );
};

// graveyard vvvv

//className="Welcome" for later maybe

{
  /* <p style={{ textAlign: "left" }}>
          The World <br />
          At Your <br />
          Thumbs
        </p> */
}
<h6 className="Slogan">
  THE WORLD <br />
  AT YOUR <br />
  THUMBS!
</h6>;

export default TitleAndName;
