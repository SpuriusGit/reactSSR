import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, ListGroup } from "react-bootstrap";
import HeadComponent from "../../components/HeadComponent";

const UserPosts = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const userData = await userResponse.json();
        setUser(userData);

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
    <React.Fragment>
      <HeadComponent
        title={`${user.name}'s Posts`}
        description={`${user.name}'s Posts`}
      />
      <Container className="mt-4">
        <h1 className="text-center">{user.name}'s Posts</h1>
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
      </Container>
    </React.Fragment>
  );
};

export default UserPosts;
