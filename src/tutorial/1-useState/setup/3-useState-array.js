import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removePerson = (id) => {
    let filterPeople = people.filter((person) => person.id !== id);
    setPeople(filterPeople);
  };
  return (
    <>
      {people.map((people) => {
        const { id, name } = people;
        return (
          <div key={id} className="item">
            <h1>{name}</h1>
            <button onClick={() => removePerson(id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
