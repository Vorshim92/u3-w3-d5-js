import { configureStore, combineReducers } from "@reduxjs/toolkit";
import resultReducer from "../reducers/searchResReducer";

const unifiedReducer = combineReducers({
  results: resultReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
