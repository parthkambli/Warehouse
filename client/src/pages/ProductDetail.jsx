import { useContext, useEffect } from "react";
import { ProductContext } from "../context/product/ProductContext";

import { Badge, Card } from "react-bootstrap";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

import { Link, useParams } from "react-router-dom";

import { format } from "date-fns";

const ProductDetail = () => {
  const { product, getProduct, deleteProduct } = useContext(ProductContext);
  console.log("product = " + product);
  const { id } = useParams();
  useEffect(() => {
    getProduct(id);
    console.log("id = " + id);
    console.log("product after = " + product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="col-sm-9 p-sm-5">
      <Card style={{ height: "65vh", backgroundColor: "#eeeeee" }}>
        <Card.Body className="p-0">
          <Card.Title
            className="fs-4 p-2 px-4"
            style={{
              backgroundColor: "#3282B8",
              color: "#eeeeee",
            }}
          >
            Product Detail
          </Card.Title>
          <div className="p-4">
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
            <div className="float-end position-absolute bottom-0 end-0 m-5">
              <span className="text-center  m-auto mx-2 p-0 col-sm-3 col-12">
                <Link to="/product-edit" className="text-white">
                  <Badge className="bg-success ">
                    <FaPencilAlt className="fs-2" />
                  </Badge>
                </Link>
              </span>
              <span className="text-center  m-auto mx-2 p-0 col-sm-3 col-12">
                <Link to="/inventory" className="text-white">
                  <Badge
                    className="bg-danger "
                    onClick={() => deleteProduct(product._id)}
                  >
                    <FaRegTrashAlt className="fs-2" />
                  </Badge>
                </Link>
              </span>
            </div>
          </div>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
