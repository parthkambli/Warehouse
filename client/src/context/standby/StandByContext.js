import { createContext, useReducer } from "react";
import StandByReducer from "./StandByReducer";
import api from "../api";

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

  // Get all standby
  async function getStandBy() {
    try {
      const res = await api.get("/api/standby");
      dispatch({
        type: "GET_STANDBY",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // add stadby
  async function addStandBy(standby) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await api.post("/api/standby", standby, config);
      dispatch({
        type: "ADD_STANDBY",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // delete standby
  async function deleteStandBy(id) {
    try {
      await api.delete(`/api/standby/${id}`);
      dispatch({
        type: "DELETE_STANDBY",
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
    <StandByContext.Provider
      value={{
        standby: state.standby,
        error: state.error,
        loading: state.loading,
        getStandBy,
        addStandBy,
        deleteStandBy,
      }}
    >
      {children}
    </StandByContext.Provider>
  );
};
