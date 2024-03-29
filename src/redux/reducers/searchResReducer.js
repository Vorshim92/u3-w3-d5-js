import { FETCH_SEARCH, FETCH_ROCK, FETCH_POP, FETCH_HIP } from "../actions";

const initialState = {
  search: [],
  rock: [],
  pop: [],
  hip: [],
};

const resultReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case FETCH_ROCK:
      return {
        ...state,
        rock: action.payload,
      };
    case FETCH_POP:
      return {
        ...state,
        pop: action.payload,
      };
    case FETCH_HIP:
      return {
        ...state,
        hip: action.payload,
      };
    default:
      return state;
  }
};

export default resultReducer;
