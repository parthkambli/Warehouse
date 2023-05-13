// Hooks
import { useContext, useEffect, useState } from "react";
// React-Bootsrtap
import { Button, Form, Spinner } from "react-bootstrap";
// React-router-dom
import { useNavigate, useParams } from "react-router-dom";
// Context
import { ProductContext } from "../context/product/ProductContext";

const ProductEdit = () => {
  const { product, getProduct, editProduct, loading } =
    useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [model, setModel] = useState("");
  const [spare, setSpare] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      getProduct(id);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loading && product) {
      setProductName(product.Product_Name);
      setModel(product.Model_No);
      setSpare(product.Spare);
    }
  }, [loading, product]);

  const onSubmit = (e) => {
    e.preventDefault();
    const editedProduct = {
      Product_Name: productName,
      Model_NO: model,
      Spare: spare,
    };
    editProduct(id, editedProduct);
    navigate("/inventory");
  };

  return (
    <div className="col-sm-9 p-sm-5">
      <h1
        style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
        className="px-2"
      >
        Edit Product :-
      </h1>
      <div
        className={
          loading
            ? "border border-2 rounded-5 p-4 d-flex align-items-center justify-content-center"
            : "border border-2 rounded-5 p-4"
        }
        style={{ height: "65vh", backgroundColor: "#eeeeee" }}
      >
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name :-</Form.Label>
              <Form.Control
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter Product Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Model Number :-</Form.Label>
              <Form.Control
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Enter Model Number"
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
              Edit
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default ProductEdit;
