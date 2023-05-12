import { createContext, useReducer } from "react";
import SaleReducer from "./SaleReducer";

// Initial State ------------------------------------------------------------------
const initialState = {
  sales: [],
  error: null,
  loading: true,
};

// Create Context -----------------------------------------------------------------
export const SaleContext = createContext(initialState);

// Procider Component -------------------------------------------------------------
export const SaleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SaleReducer, initialState);

  // Action -------------------------------------

  return (
    <SaleContext.Provider
      value={{ sales: state.sales, error: state.error, loading: state.loading }}
    >
      {children}
    </SaleContext.Provider>
  );
};
