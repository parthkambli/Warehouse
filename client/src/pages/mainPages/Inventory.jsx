// components
import { useContext, useState } from "react";
import InventoryTable from "../../components/tables/InventoryTable";
import { ProductContext } from "../../context/product/ProductContext";

const Inventory = () => {
  const { success, resetSuccess } = useContext(ProductContext);

  setTimeout(() => {
    resetSuccess();
  }, 3000);

  const [searchKey, setSearchKey] = useState("");

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
      <InventoryTable searchKey={searchKey} />
    </div>
  );
};

export default Inventory;
