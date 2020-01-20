import authReducer from "./authReducer";
import feedbackReducer from "./feedbackReducer";
import { combinereducers, combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  feedback: feedbackReducer
});

export default rootReducer;
