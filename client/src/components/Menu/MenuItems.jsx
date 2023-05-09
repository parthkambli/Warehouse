import { Link, useLocation } from "react-router-dom";

const MenuItems = ({ pageName, activePage, setActivePage, title, icon }) => {
  let location = useLocation();

  return (
    <li>
      <Link
        to={pageName}
        className="text-decoration-none"
        onClick={() => setActivePage(pageName)}
      >
        <span
          className="badge rounded-pill rounded-start d-flex d-flex justify-content-start p-2 px-4 my-3 me-4"
          // style={{ backgroundColor: "#3282B8", color: "#eeeeee", width: "90%" }}
          style={
            location.pathname === pageName
              ? { backgroundColor: "#3282B8", color: "#eeeeee" }
              : { backgroundColor: "#BBE1FA", color: "#3282B8" }
          }
        >
          {icon}
          <span
            className="fs-4 d-sm-none d-lg-block "
            style={{ fontFamily: "Georgia", fontWeight: "bold" }}
          >
            {title}
          </span>
        </span>
      </Link>
    </li>
  );
};

export default MenuItems;
