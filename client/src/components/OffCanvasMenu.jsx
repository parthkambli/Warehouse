import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import SideMenu from "./Menu/SideMenu";

const OffCanvasMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setShow(true)} // Show offcanvas
        className="d-inline-block d-sm-none"
      >
        Menu
      </Button>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)} // close off canvas
        style={{ backgroundColor: "#BBE1FA" }}
      >
        <Offcanvas.Header
          className="text-white"
          style={{ backgroundColor: "#1B262C" }}
          closeButton
        >
          <Offcanvas.Title
            style={{ fontFamily: "Georgia", fontWeight: "bold" }}
          >
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <SideMenu />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvasMenu;
