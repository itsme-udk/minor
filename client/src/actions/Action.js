// actions.js
export const SET_SELECTED_USER = "SET_SELECTED_USER";

export const setSelectedUser = (user) => ({
  type: SET_SELECTED_USER,
  payload: user,
});
