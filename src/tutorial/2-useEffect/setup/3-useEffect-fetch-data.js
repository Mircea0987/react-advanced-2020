import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setUsers(user);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h3>Github pages</h3>
      {users.map((user) => {
        const { id, avatar_url, html_url, login } = user;
        return (
          <ul key={id} className="users">
            <li>
              <img src={avatar_url}></img>
              <h2>{login}</h2>
              <a href={html_url}>Profile</a>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default UseEffectFetchData;
