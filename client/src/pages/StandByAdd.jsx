import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { StandByContext } from "../context/standby/StandByContext";

const StandByAdd = () => {
  const [productName, setProductName] = useState("");
  const [customer, setCustomer] = useState("");
  const [qty, setQty] = useState(0);

  const { addStandBy } = useContext(StandByContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newStandBy = {
      Product_Name: productName,
      Customer: customer,
      Quantity: qty,
    };
    addStandBy(newStandBy);
    setProductName("");
    setCustomer("");
    setQty(0);
  };

  return (
    <div className="col-sm-9 p-sm-5">
      <h1
        style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
        className="px-2"
      >
        Sale Product :-
      </h1>
      <div
        className="border border-2 rounded-5 p-4"
        style={{ height: "65vh", backgroundColor: "#eeeeee" }}
      >
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

          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StandByAdd;
