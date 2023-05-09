import { Badge, Button, Table } from "react-bootstrap";
import { TbPackageImport } from "react-icons/tb";

const StandbyTable = () => {
  return (
    <>
      <div
        className="border border-2"
        style={{ height: "65vh", overflowY: "scroll" }}
      >
        <Table
          className="align-middle text-center "
          responsive
          striped
          bordered
          hover
        >
          <thead
            className="align-middle text-center fs-5"
            style={{
              backgroundColor: "#3282B8",
              color: "#eeeeee",
              fontFamily: "Times New Roman",
              fontWeight: "bold",
            }}
          >
            <tr>
              <th>Product</th>
              <th>Customer</th>
              <th>Spare</th>
              <th>Date</th>
              <th>Returne</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hand Bag</td>
              <td>ABC</td>
              <td>2</td>
              <td>25-2-2023</td>
              <td className="row m-0">
                <Badge className="text-center text-white bg-warning fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <TbPackageImport />
                </Badge>
              </td>
            </tr>
            <tr>
              <td>Laptop</td>
              <td>XYZ</td>
              <td>10</td>
              <td>24-2-2023</td>
              <td className="row m-0">
                <Badge className="text-center text-white bg-warning fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <TbPackageImport />
                </Badge>
              </td>
            </tr>
            <tr>
              <td>School Bag</td>
              <td>Tech</td>
              <td>2</td>
              <td>22-1-2023</td>
              <td className="row m-0">
                <Badge className="text-center text-white bg-warning fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <TbPackageImport />
                </Badge>
              </td>
            </tr>
            <tr>
              <td>School Bag</td>
              <td>Tech</td>
              <td>2</td>
              <td>22-1-2023</td>
              <td className="row m-0">
                <Badge className="text-center text-white bg-warning fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <TbPackageImport />
                </Badge>
              </td>
            </tr>
            <tr>
              <td>School Bag</td>
              <td>Tech</td>
              <td>2</td>
              <td>22-1-2023</td>
              <td className="row m-0">
                <Badge className="text-center text-white bg-warning fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <TbPackageImport />
                </Badge>
              </td>
            </tr>
            <tr>
              <td>School Bag</td>
              <td>Tech</td>
              <td>2</td>
              <td>22-1-2023</td>
              <td className="row m-0">
                <Badge className="text-center text-white bg-warning fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <TbPackageImport />
                </Badge>
              </td>
            </tr>
            <tr>
              <td>School Bag</td>
              <td>Tech</td>
              <td>2</td>
              <td>22-1-2023</td>
              <td className="row m-0">
                <Badge className="text-center text-white bg-warning fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <TbPackageImport />
                </Badge>
              </td>
            </tr>
            <tr>
              <td>School Bag</td>
              <td>Tech</td>
              <td>2</td>
              <td>22-1-2023</td>
              <td className="row m-0">
                <Badge className="text-center text-white bg-warning fs-4 m-auto my-2 p-0 col-sm-3 col-12">
                  <TbPackageImport />
                </Badge>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button
        variant="primary"
        className="m-2 float-end"
        // style={{
        //   backgroundColor: "#3282B8",
        //   color: "#eeeeee",
        // }}
      >
        Add
      </Button>
    </>
  );
};

export default StandbyTable;
