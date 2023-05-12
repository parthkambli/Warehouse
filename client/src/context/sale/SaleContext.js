import { createContext, useReducer } from "react";
import SaleReducer from "./SaleReducer";
import axios from "axios";

// Initial State ------------------------------------------------------------------------------------
const initialState = {
  sales: [],
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
      const res = await axios.get("/api/sales");
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
      const res = await axios.post("/api/sales", sale, config);
      const { data } = res.data;
      dispatch({
        type: "ADD_SALE",
        payload: data,
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
      await axios.delete(`/api/sales/${id}`);
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

  return (
    <SaleContext.Provider
      value={{
        sales: state.sales,
        error: state.error,
        loading: state.loading,
        getSales,
        addSale,
        deleteSale,
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};
