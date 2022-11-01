import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const handleClick = (id) => {
    let newPeople = people.filter((human) => human.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((human) => {
        const { id, name } = human;
        return (
          <div className="item" key={id}>
            <h2>{name}</h2>
            <button onClick={() => handleClick(id)}>Delete Name</button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
