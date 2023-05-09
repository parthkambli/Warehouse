import { Button, Form } from "react-bootstrap";

const ProductEdit = () => {
  return (
    <div className="col-sm-9 p-sm-5">
      <h1
        style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
        className="px-2"
      >
        Edit Product :-
      </h1>
      <div
        className="border border-2 rounded-5 p-4"
        style={{ height: "65vh", backgroundColor: "#eeeeee" }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name :-</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Model Number :-</Form.Label>
            <Form.Control type="text" placeholder="Enter Model Number" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ProductEdit;
