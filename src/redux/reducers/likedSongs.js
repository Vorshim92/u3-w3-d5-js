import { LIKED_SONG } from "../actions";

const initialState = {
  likedSongs: [],
};
const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKED_SONG:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };
    default:
      return state;
  }
};

export default likedReducer;
