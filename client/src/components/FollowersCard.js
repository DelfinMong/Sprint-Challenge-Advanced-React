import React from "react";

const FollowersCard = props => {
  return (
    <div>
      <h1>Followers</h1>
      <p>{props.login}</p>
      <img src={props.img} alt="avatar" />
    </div>
  );
};

export default FollowersCard;