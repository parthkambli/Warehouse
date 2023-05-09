import SaleTable from "../../components/tables/SaleTable";

const Sale = () => {
  return (
    <div className="col-sm-9 p-sm-4 px-sm-5">
    <h1
      style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
      className="px-2"
    >
      Sale List
    </h1>
      <SaleTable />
    </div>
  );
};

export default Sale;
