// Hooks
import { useContext, useState } from "react";
// React-Bootstrap
import { Button, Form } from "react-bootstrap";
// Context
import { ProductContext } from "../context/product/ProductContext";

const ProductAdd = () => {
  const [productName, setProductName] = useState("");
  const [qty, setQty] = useState(0);
  const [spare, setSpare] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const { addProduct, error } = useContext(ProductContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      Product_Name: productName,
      Quantity: qty,
      Spare: spare,
    };
    await addProduct(newProduct);
    setProductName("");
    setQty(0);
    setSpare(0);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="col-sm-9 p-sm-5">
      <h1
        style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
        className="px-2"
      >
        Add Product :-
      </h1>
      <div
        className="border border-2 rounded-5 p-4"
        style={{ height: "65vh", backgroundColor: "#eeeeee" }}
      >
        {error && showAlert && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Product Name :-</Form.Label>
            <Form.Control
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter Product Name"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Quantity :-</Form.Label>
            <Form.Control
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              placeholder="Enter Quantity"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Spare :-</Form.Label>
            <Form.Control
              type="number"
              value={spare}
              onChange={(e) => setSpare(e.target.value)}
              placeholder="Enter Saper"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ProductAdd;
