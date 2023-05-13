// Hooks
import { useContext, useEffect } from "react";
// React-Bootstrap
import { Badge, Button, Spinner, Table } from "react-bootstrap";
// React-Icons
import { FaRegTrashAlt } from "react-icons/fa";
// React-Router-Dom
import { Link } from "react-router-dom";
// Context
import { SaleContext } from "../../context/sale/SaleContext";
// Date-fns
import { format } from "date-fns";

const SaleTable = () => {
  const { sales, getSales, deleteSale, loading } = useContext(SaleContext);

  useEffect(() => {
    getSales();

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
              <th>Customer</th>
              <th>Qty</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5">
                  <Spinner animation="border" variant="primary" />
                </td>
              </tr>
            ) : sales.length <= 0 ? (
              <tr>
                <td colSpan="5">No Sales record found</td>
              </tr>
            ) : (
              sales.map((sale) => (
                <tr key={sale._id}>
                  <td>{sale.Product_Name}</td>
                  <td>{sale.Customer}</td>
                  <td>{sale.Quantity}</td>
                  <td>{format(new Date(sale.createdAt), "dd MMM yyyy")}</td>
                  <td className="row m-0">
                    <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                      <Badge
                        className="bg-danger"
                        onClick={() => deleteSale(sale._id)}
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
      <Link to="/sale-add">
        <Button variant="primary" className="m-2 float-end">
          Add Sale
        </Button>
      </Link>
    </>
  );
};

export default SaleTable;
