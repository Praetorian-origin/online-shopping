const loadReducer = (state = true, action) => {
  switch (action.type) {
    case "SET_IS_LOADING":
      return true;
    case "SET_IS_DONE":
      return false;
    default:
      return state;
  }
};

export const setIsDone = () => {
  return (dispatch) => {
    dispatch({
      type: "SET_IS_DONE",
    });
  };
};

export const setIsLoading = () => {
  return (dispatch) => {
    dispatch({
      type: "SET_IS_LOADING",
    });
  };
};

export default loadReducer;
