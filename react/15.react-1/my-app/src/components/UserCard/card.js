import React from "react";
import './card.css'
export const UserCard = (props) => {
  return (
    <div className={"UserCard"}>
      <h2>{props.name || "Here is no name"}</h2>
      <h2>{props.surname ?? "Here is no surname"}</h2>
      <h2>{props.age ?? "Here is no age"}</h2>
    </div>
  );
};
