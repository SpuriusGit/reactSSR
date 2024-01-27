import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, []);

  const sortUsers = (order) => {
    const sortedUsers = [...users].sort((a, b) => {
      if (order === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setUsers(sortedUsers);
  };

  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    sortUsers(newOrder);
  };

  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleSort}>
        Sort by Name {sortOrder === "asc" ? "▲" : "▼"}
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h4>{user.name}</h4>
            <Link to={`/users/${user.id}/posts`}>View Posts</Link>
            <Link to={`/users/${user.id}/albums`}>View Albums</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
