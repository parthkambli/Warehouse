import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import api from "../api";

// Initial State ------------------------------------------------------------------------
const initialState = {
  products: [],
  product: [],
  error: null,
  success: null,
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
      const res = await api.get("/api/products");
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
      const res = await api.get(`/api/products/${id}`);
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
      const res = await api.post("/api/products", product, config);
      dispatch({
        type: "ADD_PRODUCT",
        payload: res.data.data,
      });
      dispatch({
        type: "SUCCESS",
        payload: res.data.message,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // Edit product ---------------------------------
  async function editProduct(id, product) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await api.patch(`/api/products/${id}`, product, config);
      dispatch({
        type: "EDIT_PRODUCT",
        payload: res.data.data,
      });
      dispatch({
        type: "SUCCESS",
        payload: res.data.message,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // Delete product -------------------------------
  async function deleteProduct(id) {
    try {
      await api.delete(`/api/products/${id}`);
      dispatch({
        type: "DELETE_PRODUCT",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // Reset Error ----------------------------------
  async function resetSuccess() {
    dispatch({
      type: "RESET_SUCCESS",
      payload: null,
    });
  }

  // Reset Error ----------------------------------
  async function resetError() {
    dispatch({
      type: "RESET_ERROR",
      payload: null,
    });
  }
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        success: state.success,
        error: state.error,
        loading: state.loading,
        getProducts,
        getProduct,
        addProduct,
        editProduct,
        deleteProduct,
        resetError,
        resetSuccess,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
