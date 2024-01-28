import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, ListGroup } from "react-bootstrap";

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
    <Container className="mt-4">
      <h1>{user.name}'s Posts</h1>
      <ListGroup>
        {posts.map((post) => (
          <Card key={post.id} className="mb-3">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </ListGroup>
      <Link to="/users" className="btn btn-primary mt-3">
        Back to Users
      </Link>
    </Container>
  );
};

export default UserPosts;
