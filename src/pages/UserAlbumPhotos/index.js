import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserAlbumPhotos = () => {
  const { userId, albumId } = useParams();
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
    <div>
      <h1>Album Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbumPhotos;
