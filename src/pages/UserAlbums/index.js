import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, ListGroup } from "react-bootstrap";

const UserAlbums = () => {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}/albums`
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchAlbums();
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>User Albums</h1>
      <ListGroup>
        {albums.map((album) => (
          <ListGroup.Item
            key={album.id}
            className="d-flex justify-content-between"
          >
            <div>
              <h4>{album.title}</h4>
            </div>
            <div>
              <Link
                to={`/users/${id}/albums/${album.id}/photos`}
                className="btn btn-primary btn-sm"
              >
                View Photos
              </Link>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default UserAlbums;
