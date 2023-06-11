// Hooks
import React, { useEffect, useState } from "react";
// React-Bootstrap
import { Alert, Button, Container, Form } from "react-bootstrap";
// React-router-dom
import { useNavigate } from "react-router-dom";
// React Icons
import { BiArrowFromLeft } from "react-icons/bi";
// BG-Image
import backgroundImage from "../../Images/Background.jpg";

const Landing = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the height of the navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const Auth = (e) => {
    e.preventDefault();
    if (
      userName === process.env.REACT_APP_USER_NAME &&
      pass === process.env.REACT_APP_PASS
    ) {
      navigate("/inventory");
    } else {
      setShowAlert(true);
    }
  };

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
        <div className="row m-0">
          <div
            className="col-sm-6"
            style={{ fontFamily: "Georgia", fontWeight: "bold" }}
          >
            <p className="display-6 m-0">Welcome to</p>
            <p className="display-2 m-0">Warehouse</p>
            <p className="display-6 m-0">An inventory management app</p>
          </div>
          <div className="col-sm-6">
            <Form onSubmit={Auth}>
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="User Name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="outline-light" type="submit">
                <BiArrowFromLeft className="fs-4" />
              </Button>
            </Form>
            {showAlert && (
              <Alert variant="danger" className="mt-3">
                Invalid credentials. Please try again.
              </Alert>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Landing;
