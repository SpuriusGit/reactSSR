import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";

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
          <ListGroup.Item
            key={user.id}
            className="d-flex flex-column justify-content-between align-items-center"
            style={{ maxWidth: "340px" }}
          >
            <p>{user.name}</p>
            <div className="d-flex justify-content-between">
              <Button variant="link" size="sm" className="mr-2">
                <Link
                  to={`/users/${user.id}/posts`}
                  className="btn btn-primary btn-sm"
                >
                  View Posts
                </Link>
              </Button>
              <Button variant="link" size="sm">
                <Link
                  to={`/users/${user.id}/albums`}
                  className="btn btn-secondary btn-sm"
                >
                  View Albums
                </Link>
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Users;
