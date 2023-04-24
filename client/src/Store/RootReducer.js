//===============root reducer

import { combineReducers } from "redux";
import BrandReducer from "./Redux/Reducers/BrandReducer";
import catagoryReducer from "./Redux/Reducers/CatagoryReducer";
import TagReducer from "./Redux/Reducers/TagReducer";

const RootReducer = combineReducers({
  Brand: BrandReducer,
  Catagory: catagoryReducer,
  Tag: TagReducer,
});

export default RootReducer;
