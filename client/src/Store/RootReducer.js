//===============root reducer

import { combineReducers } from "redux";
import BrandReducer from "./Redux/Reducers/BrandReducer";

const RootReducer = combineReducers({
  Brand: BrandReducer,
});

export default RootReducer;
