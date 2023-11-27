// authReducer.js
import { SET_SELECTED_USER } from '../actions/Action'; // Update the path based on your actual file structure

const initialState = {
  selectedUser: null,
  // ... other initial state properties
};

const IdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    // ... handle other actions if needed
    default:
      return state;
  }
};

export default IdReducer;
