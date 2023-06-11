// Components
import { useState } from "react";
import PurchaseTable from "../../components/tables/PurchaseTable";

const Purchase = () => {
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
            Purchase List
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

      <PurchaseTable searchKey={searchKey} />
    </div>
  );
};

export default Purchase;
