const notificationReducer = (
  state = { },
  action
) => {
  switch (action.type) {
    case "SET_ERROR_MESSAGE":
      return { message: action.data, isError: true };
    case "SET_SUCCESS_MESSAGE":
      return { message: action.data, isError: false };
    case "ERASE_NOTIFICATION":
      return {}
    default:
      return state;
  }
};

export const setErrorMessage = (message) => {
  return {
    type: "SET_ERROR_MESSAGE",
    data: message,
  };
};
export const setSuccessMessage = (message) => {
  return {
    type: "SET_SUCCESS_MESSAGE",
    data: message,
  };
};

export default notificationReducer;
