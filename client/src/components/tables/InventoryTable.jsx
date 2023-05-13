// Hooks
import { useContext, useEffect } from "react";
// React-Bootstrap
import { Badge, Button, Spinner, Table } from "react-bootstrap";
// React-Icons
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { GoEye } from "react-icons/go";
// React-router-dom
import { Link } from "react-router-dom";
// Context
import { ProductContext } from "../../context/product/ProductContext";

const InventoryTable = () => {
  const { products, getProducts, deleteProduct, loading } =
    useContext(ProductContext);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div
        className="border border-2"
        style={{
          height: "65vh",
          overflowY: "scroll",
          backgroundColor: "#eeeeee",
        }}
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
              <th>Qty</th>
              <th>Spare</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4">
                  <Spinner animation="border" variant="primary" />
                </td>
              </tr>
            ) : products.length <= 0 ? (
              <tr>
                <td colSpan="4">No product found</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product.Product_Name}</td>
                  <td>{product.Quantity}</td>
                  <td>{product.Spare}</td>
                  <td className="row m-0">
                    <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                      <Link
                        to={`/product-view/${product._id}`}
                        className="text-white"
                      >
                        <Badge className="bg-warning ">
                          <GoEye className="fs-4" />
                        </Badge>
                      </Link>
                    </span>
                    <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                      <Link
                        to={`/product-edit/${product._id}`}
                        className="text-white"
                      >
                        <Badge className="bg-success ">
                          <FaPencilAlt className="fs-4" />
                        </Badge>
                      </Link>
                    </span>
                    <span className="text-center  m-auto my-2 p-0 col-sm-3 col-12">
                      <Badge
                        className="bg-danger"
                        onClick={() => deleteProduct(product._id)}
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
      <Link to="/product-add">
        <Button variant="primary" className="m-2 float-end">
          Add Product
        </Button>
      </Link>
    </>
  );
};

export default InventoryTable;
