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
      };

    case "DELETE_STANDBY":
      return {
        ...state,
        standby: state.standby.filter((SB) => SB._id !== action.payload),
      };
    default:
      return state;
  }
};
