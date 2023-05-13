// Components
import StandbyTable from "../../components/tables/StandbyTable";

const Standby = () => {
  return (
    <div className="col-sm-9 p-sm-4 px-sm-5">
      <h1
        style={{ fontFamily: "Georgia", fontWeight: "bold", color: "#3282B8" }}
        className="px-2"
      >
        Stand By
      </h1>
      <StandbyTable />
    </div>
  );
};

export default Standby;
