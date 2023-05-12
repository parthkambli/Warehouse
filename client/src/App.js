// css and other imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import NavBar from "./components/NavBar";
import SideMenu from "./components/menu/SideMenu";
import OffCanvasMenu from "./components/OffCanvasMenu";

// Pages

import Inventory from "./pages/mainPages/Inventory";
import Sale from "./pages/mainPages/Sale";
import Purchase from "./pages/mainPages/Purchase";
import Standby from "./pages/mainPages/Standby";
import ProductDetail from "./pages/ProductDetail";
import ProductEdit from "./pages/ProductEdit";
import SaleEdit from "./pages/SaleEdit";
import PurchaseEdit from "./pages/PurchaseEdit";
import { ProductProvider } from "./context/product/ProductContext";
import ProductAdd from "./pages/ProductAdd";
import { SaleProvider } from "./context/sale/SaleContext";

const App = () => {
  return (
    <ProductProvider>
      <SaleProvider>
        <BrowserRouter>
          <NavBar />
          <OffCanvasMenu />
          <div className="row m-0">
            <SideMenu className="d-sm-block d-none col-sm-3 " />
            <Routes>
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/standby" element={<Standby />} />
              <Route path="/product-view/:id" element={<ProductDetail />} />
              <Route path="/product-add" element={<ProductAdd />} />
              <Route path="/product-edit/:id" element={<ProductEdit />} />
              <Route path="/sale-edit" element={<SaleEdit />} />
              <Route path="/purchase-edit" element={<PurchaseEdit />} />
            </Routes>
          </div>
        </BrowserRouter>
      </SaleProvider>
    </ProductProvider>
  );
};

export default App;
