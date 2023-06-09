// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "GET_SALES":
      return {
        ...state,
        sales: action.payload,
        loading: false,
      };

    case "ADD_SALE":
      return {
        ...state,
        sales: [...state.sales, action.payload],
        error: null,
      };

    case "DELETE_SALE":
      return {
        ...state,
        sales: state.sales.filter((sale) => sale._id !== action.payload),
      };

    case "SEARCH":
      return {
        ...state,
        sales: action.payload,
        loading: false,
      };

    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
      };

    case "RESET_ERROR":
      return {
        ...state,
        error: action.payload,
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
