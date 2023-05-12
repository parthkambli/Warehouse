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
        sales: [action.payload, ...state.sales],
      };

    case "DELETE_SALE":
      return {
        ...state,
        sales: state.sales.filter((sale) => sale._id !== action.payload),
      };

    default:
      return state;
  }
};
