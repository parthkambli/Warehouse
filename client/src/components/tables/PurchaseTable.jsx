import { Badge, Button, Table } from "react-bootstrap";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PurchaseTable = () => {
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
            <tr>
              <td>Hand Bag</td>
              <td>ABC</td>
              <td>2</td>
              <td>25-2-2023</td>
              <td className="row m-0">
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-edit" className="text-white">
                    <Badge className="bg-success ">
                      <FaPencilAlt className="fs-4" />
                    </Badge>
                  </Link>
                </span>
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-delete/" className="text-white">
                    <Badge className="bg-danger ">
                      <FaRegTrashAlt className="fs-4" />
                    </Badge>
                  </Link>
                </span>
              </td>
            </tr>{" "}
            <tr>
              <td>Hand Bag</td>
              <td>ABC</td>
              <td>2</td>
              <td>25-2-2023</td>
              <td className="row m-0">
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-edit" className="text-white">
                    <Badge className="bg-success ">
                      <FaPencilAlt className="fs-4" />
                    </Badge>
                  </Link>
                </span>
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-delete" className="text-white">
                    <Badge className="bg-danger ">
                      <FaRegTrashAlt className="fs-4" />
                    </Badge>
                  </Link>
                </span>
              </td>
            </tr>{" "}
            <tr>
              <td>Hand Bag</td>
              <td>ABC</td>
              <td>2</td>
              <td>25-2-2023</td>
              <td className="row m-0">
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-edit" className="text-white">
                    <Badge className="bg-success ">
                      <FaPencilAlt className="fs-4" />
                    </Badge>
                  </Link>
                </span>
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-delete" className="text-white">
                    <Badge className="bg-danger ">
                      <FaRegTrashAlt className="fs-4" />
                    </Badge>
                  </Link>
                </span>
              </td>
            </tr>{" "}
            <tr>
              <td>Hand Bag</td>
              <td>ABC</td>
              <td>2</td>
              <td>25-2-2023</td>
              <td className="row m-0">
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-edit" className="text-white">
                    <Badge className="bg-success ">
                      <FaPencilAlt className="fs-4" />
                    </Badge>
                  </Link>
                </span>
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-delete" className="text-white">
                    <Badge className="bg-danger ">
                      <FaRegTrashAlt className="fs-4" />
                    </Badge>
                  </Link>
                </span>
              </td>
            </tr>{" "}
            <tr>
              <td>Hand Bag</td>
              <td>ABC</td>
              <td>2</td>
              <td>25-2-2023</td>
              <td className="row m-0">
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-edit" className="text-white">
                    <Badge className="bg-success ">
                      <FaPencilAlt className="fs-4" />
                    </Badge>
                  </Link>
                </span>
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-delete" className="text-white">
                    <Badge className="bg-danger ">
                      <FaRegTrashAlt className="fs-4" />
                    </Badge>
                  </Link>
                </span>
              </td>
            </tr>{" "}
            <tr>
              <td>Hand Bag</td>
              <td>ABC</td>
              <td>2</td>
              <td>25-2-2023</td>
              <td className="row m-0">
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-edit" className="text-white">
                    <Badge className="bg-success ">
                      <FaPencilAlt className="fs-4" />
                    </Badge>
                  </Link>
                </span>
                <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                  <Link to="/purchase-delete" className="text-white">
                    <Badge className="bg-danger ">
                      <FaRegTrashAlt className="fs-4" />
                    </Badge>
                  </Link>
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
        Purchase
      </Button>
    </>
  );
};

export default PurchaseTable;
