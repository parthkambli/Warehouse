// css and other imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import NavBar from "./components/NavBar";
import SideMenu from "./components/menu/SideMenu";
import OffCanvasMenu from "./components/OffCanvasMenu";

// Pages
import Inventory from "./pages/mainPages/Inventory";
import ProductDetail from "./pages/ProductDetail";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import Sale from "./pages/mainPages/Sale";
import SaleAdd from "./pages/SaleAdd";
import Purchase from "./pages/mainPages/Purchase";
import PurchaseAdd from "./pages/PurchaseAdd";
import Standby from "./pages/mainPages/Standby";
import StandByAdd from "./pages/StandByAdd";

// Providers
import { ProductProvider } from "./context/product/ProductContext";
import { SaleProvider } from "./context/sale/SaleContext";
import { PurchaseProvider } from "./context/purchase/PurchaseContext";
import { StandByProvider } from "./context/standby/StandByContext";
import Landing from "./pages/mainPages/Landing";

const App = () => {
  return (
    <ProductProvider>
      <SaleProvider>
        <PurchaseProvider>
          <StandByProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Landing />
                    </>
                  }
                />
                <Route
                  path="/*"
                  element={
                    <>
                      <OffCanvasMenu />
                      <div className="row m-0">
                        <SideMenu className="d-sm-block d-none col-sm-3 " />
                        <Routes>
                          <Route path="/inventory" element={<Inventory />} />
                          <Route
                            path="/product-view/:id"
                            element={<ProductDetail />}
                          />
                          <Route path="/product-add" element={<ProductAdd />} />
                          <Route
                            path="/product-edit/:id"
                            element={<ProductEdit />}
                          />
                          <Route path="/sale" element={<Sale />} />
                          <Route path="/sale-add" element={<SaleAdd />} />
                          <Route path="/purchase" element={<Purchase />} />
                          <Route
                            path="/purchase-add"
                            element={<PurchaseAdd />}
                          />
                          <Route path="/standby" element={<Standby />} />
                          <Route path="/standby-add" element={<StandByAdd />} />
                        </Routes>
                      </div>
                    </>
                  }
                />
              </Routes>
            </BrowserRouter>
          </StandByProvider>
        </PurchaseProvider>
      </SaleProvider>
    </ProductProvider>
  );
};

export default App;
