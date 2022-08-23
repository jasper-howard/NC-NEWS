import React from "react";

const TitleAndAvatar = ({ user: { user } }) => {
  return (
    <section>
      <h1 className="Title">NC NEWS</h1>
      <div>
        <p>Welcome:</p>
        <p>{user.username}</p>
      </div>
    </section>
  );
};

export default TitleAndAvatar;
