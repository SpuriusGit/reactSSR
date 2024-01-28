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
    <Container className="text-center mt-4">
      <h1>User Albums</h1>
      <ListGroup style={{ maxWidth: "340px" }} className="mx-auto">
        {albums.map((album) => (
          <ListGroup.Item key={album.id}>
            <h4>{album.title}</h4>
            <Link
              to={`/users/${id}/albums/${album.id}/photos`}
              className="btn btn-primary btn-sm mt-2"
            >
              View Photos
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default UserAlbums;
