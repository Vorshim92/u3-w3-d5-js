import { SELECT_SONG } from "../actions";

const initialState = {
  selectedSong: null,
};
const selReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        selectedSong: action.payload,
      };
    default:
      return state;
  }
};

export default selReducer;
