import React from "react";

const TitleAndName = ({ user: { user } }) => {
  return (
    <section className="Welcome-Section">
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
      <div className="Welcome">
        {/* <img src={user.avatar_url} alt="avatar pic" /> */}
        <p>
          Welcome
          <br />
          {user.username}
        </p>
      </div>
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
