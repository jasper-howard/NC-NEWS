import React from "react";

const TitleAndName = ({ user: { user } }) => {
  return (
    <section className="Welcome-Section">
      <div>
        <h1 className="Title">NC NEWS</h1>
      </div>
      <div>
        {/* <img src={user.avatar_url} alt="avatar pic" /> */}
        <p className="Welcome">
          {user.username}
          <br />
          Welcome
        </p>
      </div>
    </section>
  );
};

export default TitleAndName;
