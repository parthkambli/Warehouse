// css and other imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import NavBar from "./components/NavBar";
import SideMenu from "./components/menu/SideMenu";
import OffCanvasMenu from "./components/OffCanvasMenu";

// Pages
import Inventory from "./pages/Inventory";
import Spare from "./pages/Spare";
import Sale from "./pages/Sale";
import Purchase from "./pages/Purchase";
import Standby from "./pages/Standby";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <OffCanvasMenu />
      <div className="row m-0">
        <SideMenu className="d-sm-block d-none col-sm-3 " />
        <Routes>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/spare" element={<Spare />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/standby" element={<Standby />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
