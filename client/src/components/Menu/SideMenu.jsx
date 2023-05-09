import { useState, useEffect } from "react";

import { FaWarehouse, FaShoppingCart } from "react-icons/fa";
import { FiShoppingBag, FiClock } from "react-icons/fi";
import MenuItems from "./MenuItems";

const SideMenu = (props) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [activePage, setActivePage] = useState("/inventory");

  useEffect(() => {
    // Get the height of the navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);
  return (
    <div
      className={`${props.className} p-0 py-3`}
      style={{
        backgroundColor: "#BBE1FA",
        height: `calc(100vh - ${navbarHeight}px)`,
        overflowY: "auto",
      }}
    >
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <MenuItems
          pageName="/inventory"
          activePage={activePage}
          setActivePage={setActivePage}
          title="Inventory"
          icon={<FaWarehouse className="mx-4 fs-3" />}
        />
        <MenuItems
          pageName="/sale"
          activePage={activePage}
          setActivePage={setActivePage}
          title="Sale"
          icon={<FiShoppingBag className="mx-4 fs-3" />}
        />
        <MenuItems
          pageName="/purchase"
          activePage={activePage}
          setActivePage={setActivePage}
          title="Purchase"
          icon={<FaShoppingCart className="mx-4 fs-3" />}
        />
        <MenuItems
          pageName="/standby"
          activePage={activePage}
          setActivePage={setActivePage}
          title="Standby"
          icon={<FiClock className="mx-4 fs-3" />}
        />
      </ul>
    </div>
  );
};

export default SideMenu;
