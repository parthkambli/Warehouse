// components
import { useContext, useState } from "react";
import InventoryTable from "../../components/tables/InventoryTable";
import { ProductContext } from "../../context/product/ProductContext";
import Dropdown from "react-bootstrap/Dropdown";

const Inventory = () => {
  const { success, resetSuccess } = useContext(ProductContext);

  setTimeout(() => {
    resetSuccess();
  }, 3000);

  const [searchKey, setSearchKey] = useState("");
  const [filter, setFilter] = useState("All");

  return (
    <div className="col-sm-9 p-sm-4 px-sm-5">
      <div className="container mb-3">
        <form className="d-flex justify-content-between">
          <h1
            style={{
              fontFamily: "Georgia",
              fontWeight: "bold",
              color: "#3282B8",
            }}
            className="px-2"
          >
            Inventory
          </h1>
          <div className="d-flex p-2">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {filter}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setFilter("All")}>
                  All
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setFilter("Qty")}>
                  Qty
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setFilter("Spare")}>
                  Spare
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <input
              className="form-control mx-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
        </form>
      </div>
      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}
      <InventoryTable searchKey={searchKey} filter={filter} />
    </div>
  );
};

export default Inventory;
