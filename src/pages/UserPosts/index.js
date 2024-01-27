// UserPosts.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserPosts = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Отримання інформації про користувача
        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const userData = await userResponse.json();
        setUser(userData);

        // Отримання постів користувача
        const postsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}/posts`
        );
        const postsData = await postsResponse.json();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}'s Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <Link to="/users">Back to Users</Link>
    </div>
  );
};

export default UserPosts;
