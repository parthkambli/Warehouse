import { createContext, useReducer } from "react";
import StandByReducer from "./StandByReducer";

// Initial state
const initialState = {
  standby: [],
  error: null,
  loading: true,
};

// Create Context
export const StandByContext = createContext(initialState);

// Provider component
export const StandByProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StandByReducer, initialState);

  // Action

  return (
    <StandByContext.Provider
      value={{
        standby: state.standby,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </StandByContext.Provider>
  );
};
