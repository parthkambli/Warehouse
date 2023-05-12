// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "GET_PURCHASES":
      return {
        ...state,
        purchases: action.payload,
        loading: false,
      };

    case "ADD_PURCHASE":
      return {
        ...state,
        purchases: [...state.purchases, action.payload],
      };

    case "DELETE_PURCHASE":
      return {
        ...state,
        purchases: state.purchases.filter(
          (purchase) => purchase._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
