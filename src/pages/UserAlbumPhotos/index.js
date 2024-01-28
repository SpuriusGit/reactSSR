import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const UserAlbumPhotos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchPhotos();
  }, [albumId]);

  return (
    <Container className="mt-4">
      <h1 className="text-center">Album Photos</h1>
      <Row>
        {photos.map((photo) => (
          <Col key={photo.id} md={4} className="mb-4">
            <Card>
              <Image src={photo.thumbnailUrl} alt={photo.title} fluid />
              <Card.Body>
                <Card.Text>{photo.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserAlbumPhotos;
