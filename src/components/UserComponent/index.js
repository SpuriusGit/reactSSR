import { Link } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";

const UserComponent = ({ user }) => {
  return (
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
  );
};

export default UserComponent;
