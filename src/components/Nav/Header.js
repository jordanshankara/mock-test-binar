import { Navbar, NavbarBrand } from "reactstrap";

export default function Header() {
  return (
    <Navbar className="my-2" color="secondary" dark>
      <NavbarBrand href="/">Reactstrap</NavbarBrand>
    </Navbar>
  );
}
