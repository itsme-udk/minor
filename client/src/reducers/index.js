import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import postReducer from "./PostReducer";
import chatReducer from "./ChatUserReducer";
import IdReducer from "./IdReducer";
export const reducers = combineReducers({authReducer,postReducer, chatReducer,IdReducer})