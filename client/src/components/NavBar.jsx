import { Navbar, Container, Image, Nav } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import logo from "../Images/Logo.png";

const NavBar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#1B262C" }} variant="dark">
      <Container>
        <Navbar.Brand className="p-0">
          <div className="d-flex align-items-center">
            <Image
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mr-2"
              alt="Logo"
            />
            <span
              className="text-white mx-2"
              style={{ fontFamily: "Georgia", fontWeight: "bold" }}
            >
              Warehouse
            </span>
          </div>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#logout" className="text-white">
            <FiLogOut /> Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
