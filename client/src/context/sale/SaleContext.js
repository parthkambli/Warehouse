import { createContext, useReducer } from "react";
import SaleReducer from "./SaleReducer";
import api from "../api";

// Initial State ------------------------------------------------------------------------------------
const initialState = {
  sales: [],
  success: null,
  error: null,
  loading: true,
};

// Create Context -----------------------------------------------------------------------------------
export const SaleContext = createContext(initialState);

// Provider Component --------------------------------------------------------------------------------
export const SaleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SaleReducer, initialState);

  // Action ------------------------------------------------------

  // get all sales -------------------------
  async function getSales() {
    try {
      const res = await api.get("/api/sales");
      dispatch({
        type: "GET_SALES",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // add sale ------------------------------
  async function addSale(sale) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await api.post("/api/sales", sale, config);
      dispatch({
        type: "ADD_SALE",
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

  // Get searched result -------------------------
  async function searchResult(searchKey) {
    try {
      const res = await api.get(`/api/sales/search/${searchKey}`);
      dispatch({
        type: "SEARCH",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // delete sale ---------------------------
  async function deleteSale(id) {
    try {
      await api.delete(`/api/sales/${id}`);
      dispatch({
        type: "DELETE_SALE",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

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
    <SaleContext.Provider
      value={{
        sales: state.sales,
        success: state.success,
        error: state.error,
        loading: state.loading,
        getSales,
        addSale,
        searchResult,
        deleteSale,
        resetError,
        resetSuccess,
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};
