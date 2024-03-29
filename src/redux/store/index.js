import { configureStore, combineReducers } from "@reduxjs/toolkit";
import resultReducer from "../reducers/searchResReducer";
import selReducer from "../reducers/selectedSong";
const unifiedReducer = combineReducers({
  results: resultReducer,
  selected: selReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
