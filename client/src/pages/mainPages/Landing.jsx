// Hooks
import React, { useEffect, useState } from "react";
// React-Bootstrap
import { Container, Button } from "react-bootstrap";
// React-router-dom
import { Link } from "react-router-dom";
// BG-Image
import backgroundImage from "../../Images/Background.jpg";

const Landing = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Get the height of the navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: `calc(100vh - ${navbarHeight}px)`,
      }}
      className="d-flex align-items-center"
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: `calc(100vh - ${navbarHeight}px)`,
          backgroundColor: "#393E46",
          opacity: 0.6,
        }}
      ></div>
      <Container className="text-white" style={{ zIndex: 1, opacity: 1 }}>
        <div style={{ fontFamily: "Georgia", fontWeight: "bold" }}>
          <p className="display-6 m-0">Welcome to</p>
          <p className="display-2 m-0">Warehouse</p>
          <p className="display-6 m-0">An inventory management app</p>
        </div>
        <div className="my-3">
          <Link to="/inventory">
            <Button
              variant="primary"
              size="lg"
              className="me-3 "
              style={{
                borderRadius: "50px",
                padding: "0.5rem 1.5rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/inventory">
            <Button
              variant="outline-light"
              size="lg"
              className="mx-3 "
              style={{
                borderRadius: "50px",
                padding: "0.5rem 1.5rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Log In
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Landing;
