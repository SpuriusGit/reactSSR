import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>User Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h4>{album.title}</h4>
            {/* Додайте посилання на сторінку з фотографіями альбому */}
            <a href={`/users/${id}/albums/${album.id}/photos`}>View Photos</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbums;
