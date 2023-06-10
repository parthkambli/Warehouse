import { createContext, useReducer } from "react";
import PurchaseReducer from "./PurchaseReducer";
import api from "../api";

// Initial State
const initialState = {
  purchases: [],
  success: null,
  error: null,
  loading: true,
};

// Create Context
export const PurchaseContex = createContext(initialState);

// Provider Component
export const PurchaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PurchaseReducer, initialState);

  // Actions

  // get all purchase
  async function getPurchases() {
    try {
      const res = await api.get("/api/purchases");
      dispatch({
        type: "GET_PURCHASES",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // add purchase
  async function addPurchase(purchase) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await api.post("/api/purchases", purchase, config);
      dispatch({
        type: "ADD_PURCHASE",
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

  // delete purchase
  async function deletePurchase(id) {
    try {
      await api.delete(`/api/purchases/${id}`);
      dispatch({
        type: "DELETE_PURCHASE",
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
    <PurchaseContex.Provider
      value={{
        purchases: state.purchases,
        success: state.success,
        error: state.error,
        loading: state.loading,
        getPurchases,
        addPurchase,
        deletePurchase,
        resetError,
        resetSuccess,
      }}
    >
      {children}
    </PurchaseContex.Provider>
  );
};
