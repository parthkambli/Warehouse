import { createContext, useReducer } from "react";
import PurchaseReducer from "./PurchaseReducer";

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

  return (
    <PurchaseContex.Provider
      value={{
        purchases: state.purchases,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </PurchaseContex.Provider>
  );
};
