import { Badge, Card } from "react-bootstrap";

import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

const ProductDetail = () => {
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
              <strong>Product:-</strong> Watch
            </p>
            <p>
              <strong>Model No:-</strong> MN-400
            </p>
            <p>
              <strong>Quantity:-</strong> 10
            </p>
            <p>
              <strong>Spare :-</strong> 4
            </p>
            <p>
              <strong>Date :-</strong> 25-2-2023
            </p>
            <div className="float-end position-absolute bottom-0 end-0 m-5">
              <span className="text-center  m-auto mx-2 p-0 col-sm-3 col-12">
                <Link to="/product-edit" className="text-white">
                  <Badge className="bg-success ">
                    <FaPencilAlt className="fs-2" />
                  </Badge>
                </Link>
              </span>
              <span className="text-center  m-auto mx-2 p-0 col-sm-3 col-12">
                <Link to="/product-delete" className="text-white">
                  <Badge className="bg-danger ">
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
