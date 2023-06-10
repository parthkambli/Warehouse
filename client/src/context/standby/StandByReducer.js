// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "GET_STANDBY":
      return {
        ...state,
        standby: action.payload,
        loading: false,
      };

    case "ADD_STANDBY":
      return {
        ...state,
        standby: [...state.standby, action.payload],
        error: null,
      };

    case "DELETE_STANDBY":
      return {
        ...state,
        standby: state.standby.filter((SB) => SB._id !== action.payload),
      };

    case "RESET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
