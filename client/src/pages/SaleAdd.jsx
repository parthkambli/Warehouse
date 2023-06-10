// Hooks
import { useContext, useEffect, useState } from "react";
// React-Bootstrap
import { Button, Form } from "react-bootstrap";
// Context
import { SaleContext } from "../context/sale/SaleContext";
import { ProductContext } from "../context/product/ProductContext";
// Select
import Select from "react-select";

const SaleAdd = () => {
  const [productName, setProductName] = useState("");
  const [customer, setCustomer] = useState("");
  const [qty, setQty] = useState(0);
  const [standBy, setStandBy] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const { addSale, error, resetError, success, resetSuccess } =
    useContext(SaleContext);

  const { getProducts, products } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productNamesArray = products.map((p) => p.Product_Name);

  const productOptions = productNamesArray.map((product) => ({
    value: product,
    label: product,
  }));

  const onSubmit = (e) => {
    e.preventDefault();

    const newSale = {
      Product_Name: productName,
      Customer: customer,
      Quantity: qty,
      StandBy: standBy,
    };
    addSale(newSale);
    setProductName("");
    setCustomer("");
    setQty(0);
    setStandBy(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      resetError();
      resetSuccess();
    }, 3000);
  };

  const handleProductChange = (selectedOption) => {
    setProductName(selectedOption.value);
  };

  return (
    <div className="col-sm-9 p-sm-5">
      <h1
        style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
        className="px-2"
      >
        Add Sale :-
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
        {success && !error && showAlert && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Product Name :-</Form.Label>
            <Select
              options={productOptions}
              value={productOptions.find(
                (option) => option.value === productName
              )}
              onChange={handleProductChange}
              isClearable
              placeholder="Enter Product Name"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Customer :-</Form.Label>
            <Form.Control
              type="text"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              placeholder="Enter Model Number"
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              value={standBy}
              onChange={(e) => setStandBy(e.target.checked)}
              label="StandBy"
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

export default SaleAdd;
