import { combineReducers } from "redux";
import TestReducer from "./TestReducer";
import SearchReducer from "./SearchReducer";
export default combineReducers({
  test: TestReducer,
  search: SearchReducer
});
