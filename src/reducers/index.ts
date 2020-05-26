import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import newsReducer from "./newsReducer";

import { combineReducers } from "../utils";

const rootReducer = combineReducers(errorReducer, loadingReducer, newsReducer);

export default rootReducer;
