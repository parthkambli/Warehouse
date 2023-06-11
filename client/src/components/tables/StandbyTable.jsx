// Hooks
import { useContext, useEffect, useRef } from "react";
// React-Bootstrap
import { Badge, Button, Spinner, Table } from "react-bootstrap";
// React-Icons
import { TbPackageImport } from "react-icons/tb";
import { ImPrinter } from "react-icons/im";
// React-router-dom
import { Link } from "react-router-dom";
// Context
import { StandByContext } from "../../context/standby/StandByContext";
// Date-fns
import { format } from "date-fns";
// Print
import { useReactToPrint } from "react-to-print";

const StandbyTable = ({ searchKey }) => {
  const { standby, getStandBy, deleteStandBy, searchResult, loading } =
    useContext(StandByContext);

  useEffect(() => {
    getStandBy();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchKey === "") {
      getStandBy();
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
              <th>Spare</th>
              <th>Date</th>
              <th>Returne</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5">
                  <Spinner animation="border" variant="primary" />
                </td>
              </tr>
            ) : standby.length <= 0 ? (
              <tr>
                <td colSpan="5">No standby record found</td>
              </tr>
            ) : (
              standby.map((SB) => (
                <tr key={SB._id}>
                  <td>{SB.Product_Name}</td>
                  <td>{SB.Customer}</td>
                  <td>{SB.Quantity}</td>
                  <td>{format(new Date(SB.createdAt), "dd MMM yyyy")}</td>
                  <td className="row m-0">
                    <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                      <Badge
                        className="bg-warning"
                        onClick={() => deleteStandBy(SB._id)}
                      >
                        <TbPackageImport className="fs-4" />
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
      <Link to="/standby-add">
        <Button variant="primary" className="m-2 float-end">
          Add Stand By
        </Button>
      </Link>
    </>
  );
};

export default StandbyTable;
