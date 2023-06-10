/* eslint-disable no-unused-expressions */
// Hooks
import { useContext, useEffect, useState } from "react";
// React-Bootstrap
import { Button, Form } from "react-bootstrap";
// Context
import { PurchaseContex } from "../context/purchase/PurchaseContext";
import { ProductContext } from "../context/product/ProductContext";
// Select
import CreatableSelect from "react-select/creatable";

const PurchaseAdd = () => {
  const [productName, setProductName] = useState("");
  const [supplier, setSupplier] = useState("");
  const [qty, setQty] = useState(0);
  const [standBy, setStandBy] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { addPurchase, error, resetError, success, resetSuccess } =
    useContext(PurchaseContex);

  const { getProducts, products } = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts();
      const productNamesArray = products.map((p) => p.Product_Name);
      const options = productNamesArray.map((product) => ({
        value: product,
        label: product,
      }));
      setProductOptions(options);
    };
    fetchProducts();
  }, [getProducts, products]);

  const [productOptions, setProductOptions] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    error ? setShowSuccess(false) : null;
    success ? setShowError(false) : null;
    const newPurchase = {
      Product_Name: productName,
      Supplier: supplier,
      Quantity: qty,
      StandBy: standBy,
    };
    addPurchase(newPurchase);
    setProductName("");
    setSupplier("");
    setQty(0);
    setStandBy(false);
    setShowError(true);
    setShowSuccess(true);
    setTimeout(() => {
      setShowError(false);
      setShowSuccess(false);
      resetError();
      resetSuccess();
    }, 3000);
  };

  const handleProductChange = (selectedOption) => {
    setProductName(selectedOption ? selectedOption.value : "");
  };

  const handleProductCreate = (inputValue) => {
    // Create a new option object with the user-entered value
    const newOption = {
      value: inputValue,
      label: inputValue,
    };

    setProductName(inputValue);

    // Add the new option to the productOptions array
    const newProductOptions = [...productOptions, newOption];
    setProductOptions(newProductOptions);
  };

  return (
    <div className="col-sm-9 p-sm-5">
      <h1
        style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
        className="px-2"
      >
        Add Pruchase :-
      </h1>
      <div
        className="border border-2 rounded-5 p-4"
        style={{ height: "65vh", backgroundColor: "#eeeeee" }}
      >
        {error && showError && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {success && showSuccess && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Product Name :-</Form.Label>
            <CreatableSelect
              options={productOptions}
              value={
                productName ? { value: productName, label: productName } : null
              }
              onChange={handleProductChange}
              onCreateOption={handleProductCreate}
              isClearable
              placeholder="Enter Product Name"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Supplier :-</Form.Label>
            <Form.Control
              type="text"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              placeholder="Enter Supplier Name"
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

export default PurchaseAdd;
