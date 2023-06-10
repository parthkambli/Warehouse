// components
import { useContext } from "react";
import InventoryTable from "../../components/tables/InventoryTable";
import { ProductContext } from "../../context/product/ProductContext";

const Inventory = () => {
  const { success, resetSuccess } = useContext(ProductContext);

  setTimeout(() => {
    resetSuccess();
  }, 3000);

  return (
    <div className="col-sm-9 p-sm-4 px-sm-5">
      <h1
        style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
        className="px-2"
      >
        Inventory
      </h1>
      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}
      <InventoryTable />
    </div>
  );
};

export default Inventory;
