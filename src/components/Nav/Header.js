import { Link, useNavigate } from "react-router-dom";
import { Button, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { logOut, useAuth } from "../../service/firebase";

export default function Header() {
  const currentUser = useAuth();
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    logOut();
    navigate("/login");
  };

  return (
    <Navbar className="py-2" color="primary" dark fixed="top">
      <NavbarBrand href="/">To Do List</NavbarBrand>
      <NavItem>
        {currentUser ? (
          <Button color="danger" onClick={handleLogOut}>
            Log Out
          </Button>
        ) : (
          <Link to="/login">
            <Button color="success">Sign In</Button>
          </Link>
        )}
      </NavItem>
    </Navbar>
  );
}
