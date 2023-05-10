import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import axios from "axios";

// Initial State ------------------------------------------------------------------------
const initialState = {
  products: [],
  product: [],
  error: null,
  loading: true,
};

// Create Context ------------------------------------------------------------------------
export const ProductContext = createContext(initialState);

// Provider Component --------------------------------------------------------------------
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // Actions --------------------------------------------------------

  // Get all products -----------------------------
  async function getProducts() {
    try {
      const res = await axios.get("/api/products");
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // Get single product ---------------------------
  async function getProduct(id) {
    try {
      const res = await axios.get(`/api/products/${id}`);
      dispatch({
        type: "GET_PRODUCT",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // Add product ----------------------------------
  async function addProduct(product) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/products", product, config);
      dispatch({
        type: "ADD_PRODUCT",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        error: state.error,
        loading: state.loading,
        getProducts,
        getProduct,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
