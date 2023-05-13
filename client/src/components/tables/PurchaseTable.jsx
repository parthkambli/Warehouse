// Hooks
import { useContext, useEffect } from "react";
// React-Bootstrap
import { Badge, Button, Spinner, Table } from "react-bootstrap";
// React-Icons
import { FaRegTrashAlt } from "react-icons/fa";
// React-router-dom
import { Link } from "react-router-dom";
// Context
import { PurchaseContex } from "../../context/purchase/PurchaseContext";
// date-fns
import { format } from "date-fns";

const PurchaseTable = () => {
  const { purchases, getPurchases, deletePurchase, loading } =
    useContext(PurchaseContex);

  useEffect(() => {
    getPurchases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="border border-2"
        style={{ height: "65vh", overflowY: "scroll" }}
      >
        <Table
          className="align-middle text-center "
          responsive
          striped
          bordered
          hover
        >
          <thead
            className="align-middle text-center fs-5"
            style={{
              backgroundColor: "#3282B8",
              color: "#eeeeee",
              fontFamily: "Times New Roman",
              fontWeight: "bold",
            }}
          >
            <tr>
              <th>Product</th>
              <th>Supplier</th>
              <th>Qty</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {console.log(loading)}
            {loading ? (
              <tr>
                <td colSpan="5">
                  <Spinner animation="border" variant="primary" />
                </td>
              </tr>
            ) : purchases.length <= 0 ? (
              <tr>
                <td colSpan="5">No Purchase record found</td>
              </tr>
            ) : (
              purchases.map((purchase) => (
                <tr key={purchase._id}>
                  <td>{purchase.Product_Name}</td>
                  <td>{purchase.Supplier}</td>
                  <td>{purchase.Quantity}</td>
                  <td>{format(new Date(purchase.createdAt), "dd MMM yyyy")}</td>
                  <td className="row m-0">
                    <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                      <Badge
                        className="bg-danger"
                        onClick={() => deletePurchase(purchase._id)}
                      >
                        <FaRegTrashAlt className="fs-4" />
                      </Badge>
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
      <Link to="/purchase-add">
        <Button variant="primary" className="m-2 float-end">
          Add Purchase
        </Button>
      </Link>
    </>
  );
};

export default PurchaseTable;
