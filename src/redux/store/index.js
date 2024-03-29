import { configureStore, combineReducers } from "@reduxjs/toolkit";
import resultReducer from "../reducers/searchResReducer";
import selReducer from "../reducers/selectedSong";
import likedReducer from "../reducers/likedSongs";
const unifiedReducer = combineReducers({
  results: resultReducer,
  selected: selReducer,
  liked: likedReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
