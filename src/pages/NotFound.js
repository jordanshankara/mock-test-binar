import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "../assets/css/notfound.css";

export default function NotFound() {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center flex-column min-vh-100"
      id="notfound"
    >
      <h1 className="text-white text-center mb-2 page-text">404</h1>
      <h4 className="text-white mb-4">Page Not Found</h4>
      <Link to="/">
        <Button color="danger">Back to Home</Button>
      </Link>
    </Container>
  );
}
