import React, { useState, useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import UserComponent from "../../components/UserComponent";

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
    <div className="text-center mt-4">
      <h1>Users</h1>
      <Button variant="primary" size="sm" className="mb-3" onClick={handleSort}>
        Sort by Name {sortOrder === "asc" ? "▲" : "▼"}
      </Button>
      <ListGroup className="d-flex flex-column align-items-center">
        {users.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </ListGroup>
    </div>
  );
};

export default Users;
