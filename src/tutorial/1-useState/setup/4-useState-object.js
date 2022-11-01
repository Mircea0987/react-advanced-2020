import React, { useState } from "react";
import { names } from "../../../object";

const UseStateObject = () => {
  const [people, setPeople] = React.useState(names);
  const handleClick = () => {
    setPeople({ ...people, message: "New Message" });
  };
  return (
    <>
      <h1>{people.name}</h1>
      <h2>{people.age}</h2>
      <p>{people.message}</p>
      <button type="button" className="btn" onClick={handleClick}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
