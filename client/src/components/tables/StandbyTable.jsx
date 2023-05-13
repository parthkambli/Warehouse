import { Badge, Button, Spinner, Table } from "react-bootstrap";
import { TbPackageImport } from "react-icons/tb";

import { format } from "date-fns";
import { useContext, useEffect } from "react";
import { StandByContext } from "../../context/standby/StandByContext";
import { Link } from "react-router-dom";

const StandbyTable = () => {
  const { standby, getStandBy, deleteStandBy, loading } =
    useContext(StandByContext);

  useEffect(() => {
    getStandBy();

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
      <Link to="/standby-add">
        <Button
          variant="primary"
          className="m-2 float-end"
          // style={{
          //   backgroundColor: "#3282B8",
          //   color: "#eeeeee",
          // }}
        >
          Add Stand By
        </Button>
      </Link>
    </>
  );
};

export default StandbyTable;
