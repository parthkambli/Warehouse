import { createContext, useReducer } from "react";
import PurchaseReducer from "./PurchaseReducer";
import axios from "axios";

// Initial State
const initialState = {
  purchases: [],
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
      const res = await axios.get("/api/purchases");
      dispatch({
        type: "GET_PURCHASES",
        payload: res.data.data,
      });
      console.log(state.loading);
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
      const res = await axios.post("/api/purchases", purchase, config);
      dispatch({
        type: "ADD_PURCHASE",
        payload: res.data.data,
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
      await axios.delete(`/api/purchases/${id}`);
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
  return (
    <PurchaseContex.Provider
      value={{
        purchases: state.purchases,
        error: state.error,
        loading: state.loading,
        getPurchases,
        addPurchase,
        deletePurchase,
      }}
    >
      {children}
    </PurchaseContex.Provider>
  );
};
