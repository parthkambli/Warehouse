// components
import InventoryTable from "../../components/tables/InventoryTable";

const Inventory = () => {
  return (
    <div className="col-sm-9 p-sm-4 px-sm-5">
      <h1
        style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
        className="px-2"
      >
        Inventory
      </h1>
      <InventoryTable />
    </div>
  );
};

export default Inventory;
