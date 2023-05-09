import PurchaseTable from "../../components/tables/PurchaseTable";

const Purchase = () => {
  return (
    <div className="col-sm-9 p-sm-4 px-sm-5">
    <h1
      style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
      className="px-2"
    >
      Purchase List
    </h1>
      <PurchaseTable />
    </div>
  );
};

export default Purchase;
