import { Button, Table } from "react-bootstrap";
import { FaEye, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const InventoryTable = () => {
  return (
    <>
      <div
        className="border border-2"
        style={{ height: "65vh", overflowY: "scroll" }}
      >
        <Table
          className="align-middle text-center"
          responsive
          striped
          bordered
          hover
        >
          <thead
            className="align-middle text-center"
            style={{ backgroundColor: "#3282B8", color: "#eeeeee" }}
          >
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Qty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PN-100</td>
              <td>Hand Bag</td>
              <td>5</td>
              <td className="row m-0">
                <span className="text-center text-primary fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/inventory/product-detail">
                    <FaEye />
                  </Link>
                </span>
                <span className="text-center text-success fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaPencilAlt />
                </span>
                <span className="text-center text-danger fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaRegTrashAlt />
                </span>
              </td>
            </tr>
            <tr>
              <td>PN_200</td>
              <td>Laptop</td>
              <td>10</td>
              <td className="row m-0">
                <span className="text-center text-primary fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/inventory/product-detail">
                    <FaEye />
                  </Link>
                </span>
                <span className="text-center text-success fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaPencilAlt />
                </span>
                <span className="text-center text-danger fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaRegTrashAlt />
                </span>
              </td>
            </tr>
            <tr>
              <td>PN_300</td>
              <td>School Bag</td>
              <td>12</td>
              <td className="row m-0">
                <span className="text-center text-primary fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/inventory/product-detail">
                    <FaEye />
                  </Link>
                </span>
                <span className="text-center text-success fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaPencilAlt />
                </span>
                <span className="text-center text-danger fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaRegTrashAlt />
                </span>
              </td>
            </tr>
            <tr>
              <td>PN_300</td>
              <td>School Bag</td>
              <td>12</td>
              <td className="row m-0">
                <span className="text-center text-primary fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/inventory/product-detail">
                    <FaEye />
                  </Link>
                </span>
                <span className="text-center text-success fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaPencilAlt />
                </span>
                <span className="text-center text-danger fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaRegTrashAlt />
                </span>
              </td>
            </tr>
            <tr>
              <td>PN_300</td>
              <td>School Bag</td>
              <td>12</td>
              <td className="row m-0">
                <span className="text-center text-primary fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/inventory/product-detail">
                    <FaEye />
                  </Link>
                </span>
                <span className="text-center text-success fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaPencilAlt />
                </span>
                <span className="text-center text-danger fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaRegTrashAlt />
                </span>
              </td>
            </tr>
            <tr>
              <td>PN_300</td>
              <td>School Bag</td>
              <td>12</td>
              <td className="row m-0">
                <span className="text-center text-primary fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/inventory/product-detail">
                    <FaEye />
                  </Link>
                </span>
                <span className="text-center text-success fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaPencilAlt />
                </span>
                <span className="text-center text-danger fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaRegTrashAlt />
                </span>
              </td>
            </tr>
            <tr>
              <td>PN_300</td>
              <td>School Bag</td>
              <td>12</td>
              <td className="row m-0">
                <span className="text-center text-primary fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/inventory/product-detail">
                    <FaEye />
                  </Link>
                </span>
                <span className="text-center text-success fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaPencilAlt />
                </span>
                <span className="text-center text-danger fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaRegTrashAlt />
                </span>
              </td>
            </tr>
            <tr>
              <td>PN_300</td>
              <td>School Bag</td>
              <td>12</td>
              <td className="row m-0">
                <span className="text-center text-primary fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/inventory/product-detail">
                    <FaEye />
                  </Link>
                </span>
                <span className="text-center text-success fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaPencilAlt />
                </span>
                <span className="text-center text-danger fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <FaRegTrashAlt />
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button
        variant="primary"
        className="m-2 float-end"
        // style={{
        //   backgroundColor: "#3282B8",
        //   color: "#eeeeee",
        // }}
      >
        Add Product
      </Button>
    </>
  );
};

export default InventoryTable;
