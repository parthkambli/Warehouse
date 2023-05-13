// Hooks
import { useContext, useEffect } from "react";
// React-Bootstrap
import { Badge, Spinner } from "react-bootstrap";
// React-Icons
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
// React-router-dom
import { Link, useNavigate, useParams } from "react-router-dom";
// Context
import { ProductContext } from "../context/product/ProductContext";
// Date-fns
import { format } from "date-fns";

const ProductDetail = () => {
  const { product, getProduct, deleteProduct, loading } =
    useContext(ProductContext);

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getProduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="col-sm-9 p-sm-5">
      <h1
        style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
        className="px-2"
      >
        Product detail :-
      </h1>
      <div
        className={
          loading
            ? "border border-2 rounded-5 p-4 d-flex align-items-center justify-content-center"
            : "border border-2 rounded-5 p-4"
        }
        style={{ height: "65vh", backgroundColor: "#eeeeee" }}
      >
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <div className="p-sm-4 px-sm-5 fs-5 position-relative h-100">
            <p>
              <strong>Product:-</strong> {product.Product_Name}
            </p>
            <p>
              <strong>Model No:-</strong> {product.Model_No}
            </p>
            <p>
              <strong>Quantity:-</strong> {product.Quantity}
            </p>
            <p>
              <strong>Spare :-</strong> {product.Spare}
            </p>
            {product.createdAt && (
              <p>
                <strong>Date :-</strong>{" "}
                {format(new Date(product.createdAt), "dd MMM yyyy")}
              </p>
            )}
            <div className="float-end position-absolute bottom-0 end-0 ">
              <span className="m-auto mx-2 p-0 ">
                <Link
                  to={`/product-edit/${product._id}`}
                  className="text-white"
                >
                  <Badge className="bg-success ">
                    <FaPencilAlt className="fs-2" />
                  </Badge>
                </Link>
              </span>
              <span className="m-auto mx-2 p-0 ">
                <Badge
                  className="bg-danger"
                  onClick={() => {
                    deleteProduct(product._id);
                    navigate("/inventory");
                  }}
                >
                  <FaRegTrashAlt className="fs-2" />
                </Badge>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
