// Hooks
import { useContext, useEffect, useRef } from "react";
// React-Bootstrap
import { Badge, Button, Spinner, Table } from "react-bootstrap";
// React-Icons
import { FaRegTrashAlt } from "react-icons/fa";
import { ImPrinter } from "react-icons/im";
// React-Router-Dom
import { Link } from "react-router-dom";
// Context
import { SaleContext } from "../../context/sale/SaleContext";
// Date-fns
import { format } from "date-fns";
// Print
import { useReactToPrint } from "react-to-print";

const SaleTable = ({ searchKey }) => {
  const { sales, getSales, deleteSale, searchResult, loading } =
    useContext(SaleContext);

  useEffect(() => {
    getSales();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchKey === "") {
      getSales();
    } else {
      searchResult(searchKey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey]);

  const tablePDF = useRef();

  const generatePDF = useReactToPrint({
    content: () => {
      const tableRef = tablePDF.current.cloneNode(true);
      const actionCol = tableRef.querySelector("thead th:last-child");
      const rows = tableRef.querySelectorAll("tbody tr");
      actionCol.remove();
      rows.forEach((row) => row.lastChild.remove());
      return tableRef;
    },
    documentTitle: "Inventory",
  });

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
          ref={tablePDF}
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
              <th>StandBy</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6">
                  <Spinner animation="border" variant="primary" />
                </td>
              </tr>
            ) : sales.length <= 0 ? (
              <tr>
                <td colSpan="6">No Sales record found</td>
              </tr>
            ) : (
              sales.map((sale) => (
                <tr key={sale._id}>
                  <td>{sale.Product_Name}</td>
                  <td>{sale.Customer}</td>
                  <td>{sale.Quantity}</td>
                  <td>
                    {sale.StandBy ? (
                      <Badge bg="warning" className="fs-6">
                        StandBy
                      </Badge>
                    ) : (
                      ""
                    )}
                  </td>
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
      <Button variant="primary" className="m-2" onClick={generatePDF}>
        <ImPrinter className="fs-4" />
      </Button>
      <Link to="/sale-add">
        <Button variant="primary" className="m-2 float-end">
          Add Sale
        </Button>
      </Link>
    </>
  );
};

export default SaleTable;
