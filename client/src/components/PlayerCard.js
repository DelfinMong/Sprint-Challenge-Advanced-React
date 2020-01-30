import React from "react";

const Playercard = props => {
  return (
    <div>
       <h1>{props.name}</h1>
      <p>{props.country}</p>
      <p>Searches: {props.searches}</p>
    </div>
  );
};

export default Playercard;