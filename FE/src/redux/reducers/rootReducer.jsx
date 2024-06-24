import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
//store tổng ứng dụng

const rootReducer = combineReducers({
  // Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
  UserReducer,
});
export default rootReducer;
