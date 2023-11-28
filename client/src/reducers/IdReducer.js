// authReducer.js
import { SET_SELECTED_USER, RESET_SELECTED_USER } from '../actions/Action'; // Update the path based on your actual file structure

const initialState = {
  selectedUser: null,
  // ... other initial state properties
};

const IdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_USER:
        console.log('SET_SELECTED_USER', action.payload);
      return {
        ...state,
        selectedUser: action.payload,
      };
    case RESET_SELECTED_USER:
        return {
          ...state,
          selectedUser: null,
        };
    // ... handle other actions if needed
    default:
      return state;
  }
};

export default IdReducer;
