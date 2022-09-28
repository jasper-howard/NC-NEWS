import React from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { StyleContext } from "../context/styleContext";
import DivWithContext from "./DivWithContext";

const TitleAndName = ({ user: { user } }) => {
  const { borderStyle } = useContext(StyleContext);

  return (
    <section className="Welcome-Section">
      <Link to="/">
        <DivWithContext>
          <div className="Mobile_Title_Div">
            <h1 className="Title_Text">NC </h1>
            <h6>
              THE WORLD <br />
              AT YOUR <br />
              THUMBS!
            </h6>
            <h1 className="Title_Text">NEWS</h1>
          </div>
          <div className="Desktop_Title_Div">
            <h1 className="Title_Text">NC {"\u00A0"} NEWS</h1>

            <h6>
              THE WORLD <br />
              AT YOUR <br />
              THUMBS!
            </h6>
          </div>
        </DivWithContext>
      </Link>
      <div className={`Title Welcome ${borderStyle}`}>
        <p>
          Welcome
          <br />
          {user.username}
        </p>
      </div>
    </section>
  );
};

export default TitleAndName;
